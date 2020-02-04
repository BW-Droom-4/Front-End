
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import TinderCard from 'react-tinder-card';

const testData = ['hey', 'these', 'swipable', 'cards', 'are', 'neat'].reverse();

const Dashboard = () => {

  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <div className='cardContainer'>
        {testData.map(item =>
          <TinderCard
            className='swipe'
            key={item}
            onSwipe={(dir) =>swiped(dir, item)}
            onCardLeftScreen={() => outOfFrame(item)}
          >
            <div className='card'>
              <h3>{item}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Dashboard;
