import React from 'react'
import './App.css'

import { makeStyles } from '@material-ui/core/styles'

import AppHeaderBar from './component/AppHeaderBar'
import SearchContainer from './component/SearchContainer'
import ResultContainer from './component/ResultContainer'

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 250,
    minWidth: 290,
    backgroundColor: '#fff',
    margin: 0,
  },
}))


export default function App() {
  const classes = useStyles()

  // all images
  const [allImages, setAllImages] = React.useState(null)
  React.useEffect(() => {
    console.log('allImages:', allImages)
  }, [allImages])


  // filtered images
  const [filteredImages, setFiteredImages] = React.useState([1, 2, 3, 4, 5])
  React.useEffect(() => {
    console.log('filteredImages:', filteredImages)
  }, [filteredImages])


  // os
  const [os, setOS] = React.useState(null)
  // pages
  const [pages, setPages] = React.useState(null)

  React.useEffect(() => {
    console.log('os:', os, 'pages:', pages)
  }, [os, pages])


  // handle
  const handleChangeOS = (value) => {
    setOS(value)
  }

  const handleChangePages = (value) => {
    setPages(value)
  }

  return (
    <div className={classes.root}>
      <AppHeaderBar />

      <SearchContainer
        os={os}
        handleChangeOS={handleChangeOS}
        pages={pages}
        handleChangePages={handleChangePages}
      />

      <ResultContainer data={filteredImages} />
    </div>
  )
}
