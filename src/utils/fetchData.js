export const exerciseOptions ={
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': '79e80a3d21mshc5356ab5e82417ep10ef23jsnc2e654ca5f5f'
        }
      };
export const fetchData = async(url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'e1496c452bmshddfe20c83f82512p1d425cjsn13f2d662063b',
  },
};