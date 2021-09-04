export function createDOM(string) {
  const parser = new DOMParser()
  const HTML = parser.parseFromString(string, "text/html")
  return HTML.body.firstChild
}