import React from 'react'

const Player = (props) => {

    console.log(props)

    const {name, position, number, points} = props  // distruction

  return (
    <div className='text-center'>
         <h4>Name: {name} </h4> {/* or <h4>Name: {props.name} </h4> */}
        <h4>Position: {position} </h4> {/* or <h4>Position: {props.position} </h4> */}
        <h4>Number: {number} </h4> {/* or <h4>Number: {props.number} </h4> */}
        <h4>Points: {points} </h4> {/* or <h4>Points: {props.points} </h4> */}
    </div>
  )
}

export default Player