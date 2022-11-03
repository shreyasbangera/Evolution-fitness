import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';


const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const[search, setSearch] = useState('');
  const[bodyParts, setBodyParts] = useState([]);

  useEffect(() =>{
    const fetchExercisesData = async() =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPrtList', exerciseOptions);

      setBodyParts(['all',...bodyPartsData]);
    }

  },[])

const handleSearch = async() =>{
if(search){
  const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
  const searchedExercises = exerciseData.filter(
    (exercise) => exercise.name.toLowerCase().includes(search)
    || exercise.target.toLowerCase().includes(search)
    || exercise.equipment.toLowerCase().includes(search)
    || exercise.bodyPart.toLowerCase().includes(search)
  )

  setSearch('');
  setExercises(searchedExercises);
}
}


  return (
   <Stack alignItems="center" mt='37px' justifyContent='center' p="20px">
   <Typography fontWeight={700} sx={{ fontSize:{ lg:'44px', xs:'30px'}}} mb="49px" textAlign="center">
   Awesome Exercises You<br /> Should Know
   </Typography>
   <Box Position="relative" mb="72px" >
   <TextField 
   sx={{ input:{ fontWeight:'700', border:'none'}, 
   width: { lg: '800px', xs: '350px'}
  }}
   height = "76px" value ={search} onChange={(e)=> setSearch(e.target.value.toLowerCase())}
   placeholder="Search Exercises" type="text" />
   <Button className="search-btn"
   sx={{ bgcolor:"#0000FF",
  color: '#fff',
  width:{ lg: '175px', xs: '80px'},
  fontSize: { lg:'20px', xs: '16px'},
  height: '55px'}}
  onClick={handleSearch}
 >Search</Button>
   </Box> 
   </Stack>
  )
}

export default SearchExercises;