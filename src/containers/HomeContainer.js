import {connect} from 'react-redux';
import Home from '../components/Home.js'



// const mapDispatchToProps = (dispatch) => {
//     return 
//     {
//         increment: () => dispatch({ type: 'INCREMENT' }),
//         decrement: () => dispatch({ type: 'DECREMENT' })
//     }
// }
const mapStateToProps = state => ({
     value : state
})

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
     
    }
  }

export default connect(mapStateToProps , mapDispatchToProps)(Home)