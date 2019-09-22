import React from 'react'
import Select from 'react-select'

import { makeStyles, emphasize } from '@material-ui/core/styles'
import { Container, Paper, Typography } from '@material-ui/core'

import components from './atoms'

import { osOption, pageOption } from '../data/index'

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2),
    boxShadow: 'none',
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
}))


export default function SearchContainer(prop) {
  const classes = useStyles()

  const {
    os, handleChangeOS, pages, handleChangePages,
  } = prop

  return (
    <Container>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {}
        </Typography>
        <Typography component="div">
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
            placeholder="ios or android"
            options={osOption}
            components={components}
            value={os}
            onChange={handleChangeOS}
            isClearable
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
            placeholder="page name"
            options={pageOption}
            components={components}
            value={pages}
            onChange={handleChangePages}
            isMulti
          />
        </Typography>
      </Paper>
    </Container>
  )
}
