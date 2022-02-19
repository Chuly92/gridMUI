import React, { useState } from 'react';
import createOperation from '../helpers/createOperation';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { Button, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

export const FormNewMovement = () => {

  const [data, setData] = useState({
    description: '',
    amount: 0,
    date: '',
    type: '',
  });

  const [error, setError] = useState(false);

  const validateInputData = (data) => {
    
    setError(false);
    
    if (data.description === '') {
      setError(true);
      alert(`Error in the field description`);
      return;
    }
    if (data.amount <= 0) {
      setError(true);
      alert(`Error in the field amount`);
      return;
    }
    if (data.date === '') {
      setError(true);
      alert(`Error in the date`);
      return;
    }
    if (data.type !== 'Income' && data.type !== 'Expense') {
      setError(true);
      alert(`Error in the type selector`);
      return;
    }
  }

  const handleInputChange = (e) => {
    setData({
      ...data, //el spread operator mantiene las props de data
      [e.target.name]: e.target.value //target.name = name del form -- value=valor del form
    });
    // console.log('Data en InputChange: ' + JSON.stringify(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateInputData(data);
    
    if (error === false) {
      createOperation(data);
      alert('Movement Inserted!');
      } else {
        alert('Error. Please try again')
      }
  }

  return (
    // BOX = FORM
    // TEXTFIELD = INPUT

    <Box
      component="form"
      sx={{ display: 'flex', flexWrap: 'wrap', m: 2, }}
      noValidate
      autoComplete="off"
      color="secondary"
      onSubmit={handleSubmit}
    >
      <FormControl sx={{ mr: 2, mb:2, width: 300 }}>
        <TextField
          id="description"
          name="description"
          type="text"
          value={data.description}
          label="Description"
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl sx={{ mr: 2, mb:2, width: 150 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput htmlFor="outlined-adornment-amount"
          name="amount"
          type="number"
          value={data.amount}
          label="Amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl sx={{ mr: 2, mb:2, width: 150 }}>
        <TextField
          name="date"
          type="date"
          value={data.date}
          label="Date"
          InputLabelProps={{ shrink: true }}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl sx={{ width: 150, mr: 2 }}>
        <InputLabel id="typeMovement">Type</InputLabel>
        <Select
          labelId="typeMovement"
          id="typeMovement"
          name="type"
          value={data.type}
          label="Select"
          onChange={handleInputChange}
        >
          <MenuItem value={"Income"}>Income</MenuItem>
          <MenuItem value={"Expense"}>Expense</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
      <Button
        endIcon={<SendIcon />}
        variant="contained"
        color="secondary"
        size="medium"
        sx={{ m: 1, borderRadius: 2}} type="submit" >
        SAVE {data.type}
      </Button>
      </FormControl>

    </Box>
  );
};