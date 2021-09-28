const filterHandler = (collections, option) => {
  let option_case = option.toLowerCase().toString()
  let filtered = collections.filter(value => {
    let gender = value.gender.toLowerCase()
    return gender === option_case
  })



  return filtered
}

export default filterHandler