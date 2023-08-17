import React, { useEffect } from 'react'
import {useState} from 'react'
import { Layout } from '../Components/Layout'
import { Box, Stack, TextField } from '@mui/material'
import axios from 'axios'
import { MovieItem } from '../Components/MovieItem'

export type list =  {
  Poster:string,
  Title:string,
  Year:string,
  imdbID:string
}[];

export const Home = () => {
const [movie, setmovie] = useState<string>('');
const [moviesList,setmoviesList] = useState<list>([]);

useEffect (() => {
  axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=148f7e34`)
  .then((response) => {
    if(response.data.Search) {
      setmoviesList(response.data.Search);
    }
  })
  .catch((err) => console.log(err))
},[movie])
console.log(moviesList)
  return (
    <Layout>
      <Stack spacing={2} className='container mt-4 align-items-center'>
      <TextField label='search...' value={movie} onChange={(e) => setmovie(e.target.value)} sx={{color:'primary.main',width:'50%'}} />
      <Box sx={{display:'flex',flexWrap:'wrap' ,flexDirection:'row',justifyContent:'center'}}>
        {
          moviesList.map(item => (
                <MovieItem {...item}/>
          ))
        }
      </Box>
      </Stack >
    </Layout>
  )
}
