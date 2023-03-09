import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useForm from './read';
import Box from '@mui/material/Box';


const ToDo = () => {

  var [useritem,setuseritem]=useForm({title:"", quantity:"", description:""}) 
 
  var [saveitem, setsaveitem]=useState([]);
  
  const addtoTask = () => {
    setsaveitem(
        saveitem = [...saveitem,useritem]
     )
    
  }
 
 
  
  return (
    <div>
         <Box
  sx={{
    width: 800,
    height: 200,
    margin:'0px auto',
    backgroundColor: '#fdf7ff',
    '&:hover': {
      backgroundColor: '#f7f7f7',
      opacity: [0.9, 0.8, 0.7],
    },
  }}
>
        <Typography variant='h5'>Todo List</Typography>
<br></br>
        <TextField variant='standard' name="title" value={useritem.title} onChange={setuseritem}  label='Enter an Item'></TextField>
        <TextField variant='standard' name='quantity' value={useritem.quantity} onChange={setuseritem} label='Quantity'></TextField>
        <TextField variant='standard' name='description' value={useritem.description} onChange={setuseritem} label='Description'></TextField>

        <Button variant='contained' color='secondary' onClick={addtoTask} >Save</Button>
        </Box>
        <br></br><br></br><br></br>
    
      <Box
  sx={{
    width: 800,
    height: 300,
    margin:'0px auto',
    backgroundColor: '#fdf7ff',
    '&:hover': {
      backgroundColor: '#f7f7f7',
      opacity: [0.9, 0.8, 0.7],
    },
  }}
>
      <Table>
        <TableHead>
           
                <TableRow>
                <TableCell>ITEM TITLE</TableCell>
                <TableCell>ITEM QUANTITY</TableCell>
                <TableCell>ITEM DESCRIPTION</TableCell>
                </TableRow>
           
        </TableHead>
        <TableBody>
        { 
        saveitem.map((value,index)=> {
        return <TableRow>
                <TableCell>{value.title}</TableCell>
                <TableCell>{value.quantity}</TableCell>
                <TableCell>{value.description}</TableCell>
                </TableRow>
                 })

                }
        </TableBody>
       
      </Table>
      </Box>
    </div>
  )
}

export default ToDo
