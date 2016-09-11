export default {
  parse: (str) => str
    .replace(/([a-z])([A-Z])/g, '$1 $2') 
    .split(/[\s\-]/)
    .map(w => w[0].toUpperCase())
    .join('')
}
