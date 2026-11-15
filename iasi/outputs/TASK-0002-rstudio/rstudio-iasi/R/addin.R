new_iasi_document <- function() {
  if (!requireNamespace("rstudioapi", quietly = TRUE)) stop("rstudioapi is required")
  rstudioapi::documentNew(text = "+++\nid = \"DOC-0001\"\ntype = \"document\"\ntitle = \"New IASI document\"\nstatus = \"draft\"\nversion = \"0.1.0\"\n+++\n\n# New IASI document\n", type = "iasi", execute = FALSE)
}

preview_iasi_document <- function() {
  if (!requireNamespace("rstudioapi", quietly = TRUE)) stop("rstudioapi is required")
  doc <- rstudioapi::getSourceEditorContext()
  if (!grepl("\\.iasi$", doc$path, ignore.case = TRUE)) stop("The active document is not an .iasi file")
  source <- paste(doc$contents, collapse = "\n")
  body <- sub("^\\s*(\\+\\+\\+|---)\\s*\\r?\\n.*?^\\1\\s*\\r?\\n", "", source, perl = TRUE)
  if (!requireNamespace("markdown", quietly = TRUE)) stop("Install the 'markdown' R package to preview IASI documents")
  html <- markdown::markdownToHTML(text = body, fragment.only = FALSE)
  target <- tempfile(fileext = ".html")
  writeLines(html, target, useBytes = TRUE)
  utils::browseURL(target)
  invisible(target)
}
