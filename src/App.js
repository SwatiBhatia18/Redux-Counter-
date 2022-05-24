import React from 'react'
import './App.css'
import { useSelector , useDispatch } from 'react-redux'
import { incNumber , decNumber } from './actions/index'
import HomeContainer from './containers/HomeContainer'

const App = () => {

  return (
   <div>
     <HomeContainer/>
   </div>
  )
}

export default App
