import React, { useState } from 'react'

const Player = (props) => {

    console.log(props)

    const {name, position, number, points} = props  // dustruction

    const [currentPoint, setCurrentPoint] = useState(points)

    const freeThrow = () => {
      setCurrentPoint(currentPoint + 1)
    }

  return (
    <div className='text-center'>
         <h4>Name: {name} </h4> {/* or <h4>Name: {props.name} </h4> */}
        <h4>Position: {position} </h4> {/* or <h4>Position: {props.position} </h4> */}
        <h4>Number: {number} </h4> {/* or <h4>Number: {props.number} </h4> */}
        <h4>Points: {currentPoint} </h4> {/* or <h4>Points: {props.points} </h4> */}
        <button onClick={freeThrow}>Made a free throuw</button>
    </div>
  )
}

export default Player