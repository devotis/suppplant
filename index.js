module.exports = (str, o) => {
  return str.replace (/{([^{}]*)}/g,
    (a, b) => {
      var r = o
      var parts = b.split(".")
      for (var i = 0; r && i < parts.length; i++)
        r = r[parts[i]]
      return typeof r === 'string' || typeof r === 'number' ? r : a
    }
  )
}
