import React, { useState, useEffect } from 'react';
import JoinModalButton from '../components/JoinModalButton';
import IconTextField from '../components/IconTextField';
import { Button } from '@material-ui/core';

//Makes API call to GoodGradesServer to create a new room object

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
          props.user.room_code = data.room_code;
          return data;
        })
        .catch(e => {
          return e;
        });
    }
    if (redirect) {
      // do something meaningful, Promises, if/else, whatever, and then
      window.location.assign('//room.sh/go/' + room.room_code);
    }
  });

  return (
    <div>
      <div className='App'>
        <header className='App-header'>
          {room ? (
            <div style={{ textAlign: 'center' }}>
              <IconTextField value={room.room_code}></IconTextField>
            </div>
          ) : null}
          {props.user.type === 'student' ? (
            <JoinModalButton
              style={{ textAlign: 'center' }}
              socket={props.socket}
              user={props.user}
            />
          ) : (
            <Button
              variant='contained'
              color='primary'
              style={{ margin: 40 }}
              onClick={handleRedirect}>
              Join Classroom
            </Button>
          )}
        </header>
      </div>
    </div>
  );
};
