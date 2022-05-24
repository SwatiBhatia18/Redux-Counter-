import React from 'react'
import '../App.css'
// import { useSelector , useDispatch } from 'react-redux'
// import { incNumber , decNumber } from '../actions/index'


const Home = (props) => {
  console.warn("props" , props);
//   const myState = useSelector((state) => state.changeTheNumber)
//   const dispatch = useDispatch();
  return (
    <>
    <div className="main-div">
    

    <div class="container">

    <h1>Increment/Decrement counter</h1>
    <h4>using React and Redux</h4>
    
    <div class="quantity" >
      <a class="quantity__minus" title="Decrement" onClick={() => props.decrement()}><span>-</span></a>
      <input name="quantity" type="text" class="quantity__input" value={props.value.changeTheNumber} />
      <a class="quantity__plus" title="Increment" onClick={() => props.increment()} ><span>+</span></a>
    </div>

        </div>
      </div>
  </>
  )
}

export default Home
