import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY




const useGif = (tag) => {
  
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false')
  async function fetchData(tag) {
    setLoading(true)
    const randomUrl = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagUrl = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(tag ? tagUrl : randomUrl)
    console.log(data)
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource)
    setLoading(false)
  }

  useEffect(() => {
    fetchData('jethalal')
  }, [])


  return { gif, loading, fetchData }
}

export default useGif