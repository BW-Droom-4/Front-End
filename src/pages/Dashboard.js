import React, { useState, useEffect, useSelector } from "react";
import { connect } from 'react-redux';
import TinderCard from 'react-tinder-card';
import { getJobListings, getUserListings, getLoggedInUser, getLoggedInCompany, matchCompany, matchUser  } from '../actions/act';
import Messages from './Messages';
import styled from "styled-components/macro";
import authios from '../api/authios';
import server from '../routes/server';


export const DivSizing = styled.div `
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`



const Dashboard = props => {

  const userTest = [{
    id: 50,
    firstname: "Patrick",
    lastname: "Roach",
    email: "p@p.com",
    role: "webdev",
    created_at: "...",
    updated_at: "...",
    userprofile: {
      user_id: 50,
      ocupation_title: 'homie',
      about_user: 'yes',
      years_of_experiance: 2
    }
  },
  {
    id: 51,
    firstname: "Andrew",
    lastname: "Roach",
    email: "p@p.com",
    role: "Accountant",
    created_at: "...",
    updated_at: "...",
    userprofile: {
      user_id: 50,
      ocupation_title: 'homie',
      about_user: 'yes',
      years_of_experiance: 2
    }
  }]
  


  const loggedInUserId = props.loggedInUser.id;
  const loggedInCompanyId = props.loggedInCompany.id;

  const loggedInRole = localStorage.getItem('role'); // "User" or "Company"
  const jobListings = props.jobListings.map((elm) => elm)
  const userListings = props.userListings.map((elm) => elm)

  const userRole = localStorage.getItem('role');


  useEffect(() => {
    // set the user in the store
    // console.log('hit useEffect');
    
    if(userRole === "User") {

      console.log('hit User');
    }
    else if(userRole === "Company") {
      setTestData([{}])
      console.log('hit Company');
    }
    
  }, [loggedInRole]);


  const [lastDirection, setLastDirection] = useState()
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

  const pushNewData = (role) => {
    if(role === "Company"){

      let newData = testData.map((elm)=>{return elm})
      let randoCompanyData = userListings.map((elm)=>{return elm})

      let i = 0;
      do{
        let random = randomElement(randoCompanyData);
        if (newData[0] !== random) {
          if(newData[1] !== random){
            if(newData[2] !== random){
              if(newData[3] !== random){
                if(newData[4] !==random){
                  newData.push(random)
                }
              }
            }
          }
        }
          i++;
      } while (i < 4)
      setTestData(newData)

    } else if (role === "User"){
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
    } else alert('AHHHHHHHHHHH')

  };


  const setUserMatchdata = (id) => {
    console.log('this is grabing whether the user has matched or not.')
    authios().get(server.base + server.ends.company_match.GET(id)).then(
      res => console.log(res)).catch(
        err => console.log(err)
      )
  }

  const grabCompanyMatchdata = (id) => {
    console.log('this is grabing whether the company has matched or not.')
    authios().get(server.base + server.ends.user_match.GET(id)).then(
      res => console.log(res)).catch(
        err => console.log(err)
      )
  }

///Controls how many cards to go through before updating with new ones VVV
  useEffect(() => {
    if (testData.length <= 1) {
      pushNewData(loggedInRole)
    }
  }, [testData])

///

  useEffect(()=>{
    console.log('hit')
    if(userRole === "User") {
      props.getJobListings();
    }
    else {
      props.getUserListings();
    }

  }, [])

  // useEffect(()=>{
  //   if(loggedInRole === "User"){
  //     console.log('we dem boys')
  //   }
  // }, [loggedInRole])






  const toggleGreen = () => {
    return console.log('GREEN')
  }
  const toggleRed = () => {
    return console.log('RED')
  }

  //tracks the direction swiped and filters out the local state of the array

  const swiped = (direction, nameToDelete) => {

    const loggedInRole = localStorage.getItem('role')


    if(direction == 'right' ){
      let filtered = testData.filter((elm) =>{
        return elm !== nameToDelete
        })
        if(loggedInRole === "Company"){
          grabCompanyMatchdata(nameToDelete.id)
          props.matchUser(nameToDelete, loggedInUserId, loggedInCompanyId, direction)
          toggleGreen()
          
        } else if(loggedInRole === 'User'){
          setUserMatchdata(nameToDelete.id)
          props.matchCompany(nameToDelete, loggedInUserId, loggedInCompanyId , direction)
          toggleGreen()
        }
        setLastDirection(direction)
        setTestData(filtered)
    } else if(direction == 'left'){
      let filtered = testData.filter((elm) =>{
        return elm !== nameToDelete
        })
        if(loggedInRole === "Company"){
          grabCompanyMatchdata(nameToDelete.id)
          props.matchUser(nameToDelete, loggedInUserId, loggedInCompanyId, direction)
          toggleRed()
          //denyUserMatch
        } else if(loggedInRole === 'User'){
          setUserMatchdata(nameToDelete.id)
          props.matchCompany(nameToDelete, loggedInUserId, loggedInCompanyId , direction)
          toggleRed()
        }

      setLastDirection(direction)
      setTestData(filtered)
    } else setTestData(testData)
    
  }

  const outOfFrame = (name) => {
    if(name.companyName){
      console.log(name.companyName + ' left the screen!')
    } else if(name.firstname){
      console.log(name.firstname + ' left the screen')
    } else console.warn('outOfFrame is failing miserably')
  }

  return (
    <DivSizing>

      <div className='cardContainer'>
        {testData.map(item =>
          <TinderCard
            className='swipe'
            key={item.id}
            onSwipe={(dir) => swiped(dir, item)}
            onCardLeftScreen={() => outOfFrame(item)}
          >
            <div className='card'>
              <h3>{item.companyName || item.firstname}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </DivSizing>
  )
}


const mapStateToProps = state => {
  return {
    jobListings: state.jobListings,
    userListings: state.userListings,
    matchCompany: state.matchCompany,
    loggedInUser: state.loggedInUser,
    loggedInCompany: state.loggedInCompany,
    userListings: state.userListings
  }
};


export default connect(mapStateToProps, { getJobListings, getUserListings, getLoggedInUser, getLoggedInCompany, matchCompany, matchUser  })(Dashboard);
