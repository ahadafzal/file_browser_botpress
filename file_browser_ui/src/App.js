import React, { useState,useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import RecursiveTreeView from './PreApp'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({

  

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));




export default function Rendererer() {
  const classes = useStyles();
  
  const [ dir, setDir ] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  useEffect( () => {
    axios.get('http://localhost:3000/dirs').then(res => {
     setDir(res.data)
    })
    
 },[]);

  return (


    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>Live File Tree</Paper>
        </Grid>
        {dir.map((d) => (
          <Grid item xs={6}>
          <Paper className={classes.paper}><RecursiveTreeView dir={d} execute={true}></RecursiveTreeView></Paper>
        </Grid>
        ))}
      </Grid>

      
    
   
    {/* <RecursiveTreeView></RecursiveTreeView> */}
    </div>

  );
}