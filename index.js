'use strict'

module.exports = (str, o, options) => {
  options = options || {}
  return str.replace (/{([^{}]*)}/g,
    (a, b) => {
      var r = o
      var parts = b.split(".")
      var type
      for (var i = 0; r && i < parts.length; i++)
        r = r[parts[i]]
      type = typeof r
      if (type === 'string' || type === 'number') {
        return r
      }
      if (type === 'boolean' && options.boolean) {
        return r
      }
      if (r && type === 'object' && options.stringify) {
        return JSON.stringify(r)
      }
      if (!r && options.clear) {
        return ''
      }
      return a
    }
  )
}
