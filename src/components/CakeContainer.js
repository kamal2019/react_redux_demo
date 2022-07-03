import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import { buyCakes } from '../redux/cakes/cakeActions'

function CakeContainer() {
  const number_of_cakes = useSelector(state=>state.number_of_cakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h1>Number of Cakes : {number_of_cakes}</h1>
        <button onClick={() => dispatch(buyCakes())}>Buy Cake</button>
    </div>
  )
}

export default CakeContainer