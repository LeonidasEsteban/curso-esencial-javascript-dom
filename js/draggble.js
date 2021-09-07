const defaultConfig = {
  open: true,
  debug: true,
  animatable: true,
}
export default function draggable($element, config = defaultConfig) {
  if (!($element instanceof HTMLElement)) {
    return console.warn(`Elemento invalido se esperaba un HTMLElement y se recibió ${$element}`)
  }

  function logger(message) {
    if (config.debuge) {
      console.info(message)
    }
  }
}