import React from 'react'
import Grid from '@material-ui/core/Grid'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ImageCard from './ImageCard'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(3, 2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default function ResultContainer(prop) {
  const classes = useStyles()

  const { data = [] } = prop

  return (
    <Container className={classes.root} maxWidth={false}>
      <Grid container spacing={3}>
        {
          data.map((k, i) => (
            <Grid item lg={2} md={3} sm={6} key={`ResultContainer_grid_${i}`}>
              <ImageCard
                image={k.image || 'https://type-b.org/wp-content/uploads/2019/02/S__1736725.jpg'}
                title={k.title || ''}
                content={k.content || ''}
              />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}
