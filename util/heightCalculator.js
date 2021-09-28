const heightHandler = (characters) => {
  let totalHeight = characters
    .map(values => values.height)
    .reduce((cur, prev) => {
      return Number(cur) + Number(prev)
    }, [])

    let centimeter = totalHeight
    let feet = centimeter / 30.48
    let inch = centimeter / 2.54
  return `${centimeter}cm : ${Math.floor(feet)}ft : ${inch.toFixed(2)}inches.`
}

export default heightHandler