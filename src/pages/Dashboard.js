
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import authios from '../api/authios'
import { getJobListings, getUserListings } from '../actions/act';
import {companyTestData} from './TestData';
import styled from 'styled-components'
import Messages from './Messages'



const Dashboard = props => {




  const jobListings = props.jobListings.map((elm) => elm)

  const [testData, setTestData] = useState([{
    "id": 100,
    "companyName": "Test Company",
    "email": "...",
    "role": "...",
    "created_at": "...",
    "updated_at": "...",
    "companyimages": [
      // an array with all of the company's images
    ],
    "joblistings": [
      // an array with all of the company's job listings
    ],
    "companyprofiles": {
      // an object with the company's profile
    }
  },{
    "id": 101,
    "companyName": "Test Company 2",
    "email": "...",
    "role": "...",
    "created_at": "...",
    "updated_at": "...",
    "companyimages": [
    ],
    "joblistings": [
    ],
    "companyprofiles": {
    }
  }])

/// Algorithm to get a random set of data things
  const getRandomInt= (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const randomElement = (data) => { return (data[getRandomInt(data.length)]) }

  const pushNewData = () => {
    // if(userdata matches a company){
    //   filter that matched company out
    // }
    let newData = testData.map((elm)=>{return elm})
    let randoData = jobListings.map((elm)=>{return elm})
    
    let i =0;
    do{
      let random = randomElement(randoData);
      if (newData[0] !== random) {
        if(newData[1] !== random){
          if(newData[2] !== random){
            if(newData[3] !== random){
              newData.push(random)
            }
          }
        }
      }
        i++;
    } while (i < 3) 
    setTestData(newData)
  };

///Controls how many cards to go through before updating with new ones VVV
  useEffect(() => {
    if (testData.length <= 1) {
      pushNewData()
    }
  }, [testData])

///

  useEffect(()=>{
    console.log('hit')
    props.getJobListings();

  }, [])

  const [lastDirection, setLastDirection] = useState()

  const toggleGreen = () => {
    return console.log('GREEN')
  }
  const toggleRed = () => {
    return console.log('RED')
  }

  //tracks the direction swiped and filters out the local state of the array

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete.companyName)
    console.log('direction', direction);

    if(direction == 'right' ){
      let filtered = testData.filter((elm) =>{
        return elm !== nameToDelete
        })

      toggleGreen()
      setLastDirection(direction)
        setTestData(filtered)
        console.log(filtered, 'filtered array')
    } else if(direction == 'left'){
      let filtered = testData.filter((elm) =>{
        return elm !== nameToDelete
        })

      toggleRed()
      setLastDirection(direction)
        setTestData(filtered)
        console.log(filtered, 'filtered array')
    } else setTestData(testData)
    
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  console.log(testData, 'testData outside return')
  return (
    <div>

    <Messages />

      <div className='cardContainer'>
        {testData.map(item =>
          <TinderCard
            className='swipe'
            key={item.id}
            onSwipe={(dir) => swiped(dir, item)}
            onCardLeftScreen={() => outOfFrame(item.companyName)}
          >
            <div className='card'>
              <h3>{item.companyName}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}


const mapStateToProps = state => {
  return {
    jobListings: state.jobListings,
    userListings: state.userListings
  }
};


export default connect(mapStateToProps, { getJobListings, getUserListings })(Dashboard);
