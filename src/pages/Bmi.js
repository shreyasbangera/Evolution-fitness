import React,{ useState} from 'react'
import { Box, Stack, Typography } from '@mui/material';

const Bmi = () => {
  const[ weight, setWeight ] = useState(0);
  const[ height, setHeight ] = useState(0); 
  const[ bmi, setBmi ] = useState("");
  const[ message, setMessage] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    if(weight === 0 || height === 0)
    {
      alert("Please enter valid weight and height")
    }
    else{
      const calc = weight/(height*height)*10000
      setBmi(calc.toFixed(0));
      
      if(calc<19){
        setMessage("You are Underweight")
      }
      else if(calc>=19 && calc < 25){
        setMessage("You are Healthy")
      }
      else{
        setMessage("You are Overweight")
      }
    }

  }
  return (
    <Stack alignItems="center">
    <Box  sx = {{
      mt: {lg: '150px', xs: '150px'},
      ml: { sm: '50px'}}}>
      <Typography textAlign="center" color = "#000000" fontWeight ="600" fontSize="26px">
      BMI Calculator
     </Typography>
    <form>
    <input type = "number" placeholder = "Weight in Kilograms" required onChange = {(e)=> setWeight(e.target.value)} />
    <input type = "number" placeholder= 'Height in Centimeters' require onChange ={(e)=> setHeight(e.target.value)} />
    <button className="submit-btn"  onClick ={calculate}>Calculate</button>
    <Stack className='container'>
    <Typography className='center'>
    <h3>Your BMI is: {bmi} </h3>
    {message}
    </Typography>
    </Stack>
    </form>
    </Box>
    </Stack>
  )
}

export default Bmi