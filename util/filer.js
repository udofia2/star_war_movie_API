const filterHandler = (collections, option) => {
  let option_case = option.toLowerCase()
  let filtered =  collections.filter(value => {
    let gender = value.gender.toLowerCase() 
    return gender === option
  })

  

  return filtered
}

export default filterHandler