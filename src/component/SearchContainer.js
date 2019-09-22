import React from 'react';
import { makeStyles, emphasize } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

import Select from 'react-select';

import {suggestions} from '../data/index'

import components from './atoms/index';


// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(3, 2),
//     margin: theme.spacing(3, 2),
//   },
// }));


export const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    // height: 250,
    // minWidth: 290,
    // // backgroundColor: '#f5f5f5',
    // backgroundColor: '#fff',
    // margin: 0,
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2),

  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(2),
  },
}));


export default function SearchContainer(prop) {
  const classes = useStyles();

  const {single, handleChangeSingle, multi, handleChangeMulti} = prop;

  return (
    <Container>
      <Paper className={classes.root}>
        {/* <Typography variant="h5" component="h3">
          Search
        </Typography> */}
        <Typography component="p">
          
          

        <Select
          classes={classes}
          inputId="react-select-os-type"
          TextFieldProps={{
            // label: 'os type',
            InputLabelProps: {
              htmlFor: 'react-select-os-type',
              shrink: true,
            },
          }}
          placeholder="iOS or Android"
          options={suggestions}
          components={components}
          value={single}
          onChange={handleChangeSingle}
        />
        <div className={classes.divider} />

        
        <Select
          classes={classes}
          inputId="react-select-page-id"
          TextFieldProps={{
            // label: 'Countries',
            InputLabelProps: {
              htmlFor: 'react-select-page-id',
              shrink: true,
            },
          }}
          placeholder="画面ID"
          options={suggestions}
          components={components}
          value={multi}
          onChange={handleChangeMulti}
          isMulti
        />





        </Typography>
      </Paper>
    </Container>
  );
}
