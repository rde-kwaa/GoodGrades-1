import React, { useState, useEffect } from 'react';
import JoinModalButton from '../components/JoinModalButton';
import IconTextField from '../components/IconTextField';
import { Button } from '@material-ui/core';
import BoolComponent from '../components/BoolComponent';

//Makes API call to GoodGradesServer to create a new room object

const RoomCodeDisplay = props => {
    let value = props.room ? room_code : 'Login to get room code'
    console.log(props.children)
    if (props.room)
        return <IconTextField value={props.room ? room_code : 'Login to get room code'}/>
    else
    return props.children
}


export const HomeView = props => {
  const [room, setRoom] = useState(null);
  const [redirect, setRedirect] = React.useState(false);

  const handleRedirect = () => {
    console.log({ redirect });
    setRedirect(!redirect);
  };

  useEffect(() => {
    if (!room && props.user && props.user.type === 'tutor') {
      var targetUrl =
        'https://good-grades-server.herokuapp.com/api/users/' +
        props.user.unique_id +
        '/room';
      fetch(targetUrl)
        .then(blob => blob.json())
        .then(data => {
          setRoom(data);
          props.user.room_code = data.room_code
          return data;
        })
        .catch(e => {
          return e;
        });
    }
    if (redirect) {
      window.location.assign('//room.sh/go/' + room.room_code);
    }
  });

  return (
    
    <div>
      <div className='App'>
        <header className='App-header'>
          <h1>Welcome {props.user ? props.user.givenName : 'Guest'}</h1>
          <BoolComponent value={room && room.room_code}>
            <IconTextField value={room ? room.room_code : 'Login to get room code'}/>
            <Button
                variant='contained'
                color='primary'
                onClick={handleRedirect}>
                Join Room
            </Button>
          </BoolComponent>
        </header>
      </div>
    </div>
  );
};