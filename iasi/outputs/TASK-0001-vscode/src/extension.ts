import * as vscode from "vscode";
import { parseIasi } from "./parser";
import { render } from "./renderer";
const panels = new Map<string, vscode.WebviewPanel>();
export function activate(context: vscode.ExtensionContext) {
  const selector = {language:"iasi", scheme:"file"};
  context.subscriptions.push(vscode.languages.registerCodeActionsProvider(selector, {provideCodeActions(){return []}}));
  const diagnostics = vscode.languages.createDiagnosticCollection("iasi"); context.subscriptions.push(diagnostics);
  const validate = (doc: vscode.TextDocument) => { if (doc.languageId !== "iasi") return; try { parseIasi(doc.getText()); diagnostics.delete(doc.uri); } catch(e) { diagnostics.set(doc.uri,[new vscode.Diagnostic(new vscode.Range(0,0,0,Math.min(1,doc.lineAt(0).text.length)), String(e), vscode.DiagnosticSeverity.Error)]); } };
  context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(validate), vscode.workspace.onDidChangeTextDocument(e=>{validate(e.document); updatePreview(e.document);}));
  vscode.workspace.textDocuments.forEach(validate);
  context.subscriptions.push(vscode.commands.registerCommand("iasi.openSource", async () => { const doc = await getDoc(); if(doc) await vscode.window.showTextDocument(doc, {preview:false}); }));
  context.subscriptions.push(vscode.commands.registerCommand("iasi.openPreview", async (uri?: vscode.Uri) => { const doc = await getDoc(uri); if(doc) showPreview(context, doc, vscode.ViewColumn.Beside); }));
  context.subscriptions.push(vscode.commands.registerCommand("iasi.openSplit", async () => { const doc = await getDoc(); if(doc) { await vscode.window.showTextDocument(doc, vscode.ViewColumn.One, false); showPreview(context, doc, vscode.ViewColumn.Two); } }));
}
async function getDoc(resource?: vscode.Uri) { if (resource) return vscode.workspace.openTextDocument(resource); const ed=vscode.window.activeTextEditor; if(ed?.document.languageId === "iasi") return ed.document; const uri=await vscode.window.showOpenDialog({canSelectMany:false, filters:{IASI:["iasi"]}}); return uri ? vscode.workspace.openTextDocument(uri[0]) : undefined; }
function showPreview(context: vscode.ExtensionContext, doc: vscode.TextDocument, column: vscode.ViewColumn) { const key=doc.uri.toString(); let panel=panels.get(key); if(panel) {panel.reveal(column); updatePreview(doc); return;} panel=vscode.window.createWebviewPanel("iasiPreview", "IASI Preview", column, {enableScripts:false, retainContextWhenHidden:true}); panels.set(key,panel); panel.onDidDispose(()=>panels.delete(key)); updatePreview(doc); }
function updatePreview(doc:vscode.TextDocument) { const panel=panels.get(doc.uri.toString()); if(!panel) return; try { panel.webview.html=render(parseIasi(doc.getText())); } catch(e) { panel.webview.html=`<h2>IASI error</h2><pre>${String(e).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]!))}</pre>`; } }
export function deactivate() { panels.forEach(p=>p.dispose()); }

