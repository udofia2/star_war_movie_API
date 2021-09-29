const sortHandler = () => {
  const sortByName = (names) => {
     names.sort((a, b) => {
       if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
       if (b.name.toLowerCase() > a.name.toLowerCase()) return 1
       return 0
     })
     return names
  }

  const sortByGender = (gender, opt) => {
     return gender.sort((a, b) => {
       b = opt
       if (a.gender.toLowerCase() === b.toLowerCase()) return -1
       if (b.toLowerCase() > a.gender.toLowerCase()) return 1
       return 0
     })
     
  }

  const sortByHeight = (height) => {
    let h = height.sort((a, b) => {
          return a.height - b.height;
        })
    
    return h
  }

  return {
    sortByName,
    sortByGender,
    sortByHeight
  }
}

export default sortHandler