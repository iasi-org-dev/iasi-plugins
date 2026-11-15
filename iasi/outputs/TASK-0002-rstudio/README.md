# IASI RStudio integration candidate

This candidate is a feasibility-first RStudio addin package. RStudio exposes addins through R packages and `rstudioapi`, including document creation and manipulation. Public APIs do not provide a supported registration point that makes an arbitrary `.iasi` extension behave as a native R Markdown/Quarto document with Visual mode. The addin therefore preserves `.iasi` files and provides source creation plus a safe preview command where R Markdown tooling is available.

Install from the package directory with `R CMD INSTALL rstudio-iasi`. In RStudio, use Addins > IASI: New Document or IASI: Preview Current Document.
