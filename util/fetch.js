import fetch from 'node-fetch';
import fs from 'fs'


const starwarsFilms = async (url) => {

    const response = await fetch(url);
    const data = await response.json();

    let resultFolderStore = 'result'
    if (!fs.existsSync(resultFolderStore)) {
      fs.mkdirSync(resultFolderStore)
    }

    // fs.writeFile(`result/${new Date().toISOString()}-test.json`, JSON.stringify(data), err => {
    //   if (err) {
    //     console.error(err)
    //     return
    //   }
    //   console.log('\n****************************************************\n     CONGRATULATIONS\n \nFilm detail saved in the folder /result/.....\n\n*****************************************************\n')
    // })

    return data

}

export default starwarsFilms