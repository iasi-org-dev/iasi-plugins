# IASI Plugins

🇪🇸 **Español** | 🇬🇧 [English](README.md)

**IASI Plugins** es el punto de integración de plugins, add-ins y extensiones que conectan aplicaciones externas y entornos de desarrollo con el ecosistema **IASI**.

## Objetivo

El repositorio agrupa integraciones específicas de cada aplicación y mantiene las especificaciones y los servicios comunes de IASI independientes de cualquier editor o IDE.

Las primeras integraciones previstas son **Visual Studio Code** y **RStudio**, con soporte para el formato documental `.iasi`.

## Funcionalidades previstas

- Reconocimiento nativo de documentos `.iasi`.
- Edición de contenido Markdown con metadatos TOML (`+++`) o YAML (`---`).
- Resaltado de sintaxis y validación de metadatos.
- Representación de documentos en modo **Preview**.
- **Split View** con código fuente y vista previa en paralelo, actualizada al modificar el documento.
- Incorporación progresiva de diagramas, referencias internas y otras capacidades documentales de IASI.

## Arquitectura

- **`iasi-plugins`**: adaptadores e integraciones para aplicaciones externas.
- **`iasi-docs`**: contratos comunes de formato, interpretación, validación y renderizado documental.
- **`iasi-setup-platform`**: instalación y configuración de las integraciones en las plataformas soportadas.

Estas responsabilidades se separan expresamente. Una integración con un IDE no debe redefinir el formato `.iasi` ni duplicar su semántica principal.

## Estructura propuesta

```text
iasi-plugins/
├── vscode/          # Extensión para Visual Studio Code
├── rstudio/         # Add-in / integración para RStudio
├── README.md        # Inglés
└── README_es.md     # Castellano
```

Esta estructura es un **objetivo**, no significa que ya existan todos los directorios o implementaciones.

## Hoja de ruta

1. **v0.1**: reconocimiento de `.iasi`, edición con metadatos, Preview Markdown y Split View en VS Code.
2. **v0.2**: validación de metadatos, mejora de la sincronización y navegación documental.
3. **v0.3**: diagramas y referencias entre documentos.
4. **v1.0**: integración documental común, controles de calidad y contrato estable para extensiones.

La integración con RStudio avanzará progresivamente según las capacidades disponibles en su editor y sus API de add-ins.

## Estado del proyecto

🚧 **Planificación inicial y preparación del repositorio.** Las funcionalidades anteriores son objetivos, no implementaciones ya disponibles.

## Licencia

MIT es la licencia prevista para el proyecto. Consultar `LICENSE` cuando se incorpore el archivo de licencia al repositorio.
