function ucFirst(str) {
  let substr = str.slice(0, 1)
  substr = substr.toUpperCase()
  substr = substr + str.slice(1)
  return substr
}