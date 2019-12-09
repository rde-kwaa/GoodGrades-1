import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {
  const [isSignedIn, setSignedIn] = useState(false);

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setSignedIn(status.isOnline);
  //   }

  //   window.gapi.load('auth2', () => {
  //     this.auth2 = gapi.auth2.init({
  //       client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
  //     })
  //   })
  
  //   window.gapi.load('signin2', function() {
  //     // render a sign in button
  //     // using this method will show Signed In if the user is already signed in
  //     var opts = {
  //       width: 200,
  //       height: 50,
  //       onSuccess: this.onSuccess.bind(this),
  //     }
  //     gapi.signin2.render('loginButton', opts)
  //   })
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //   };
  // });

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {isSignedIn ? <p>Welcome</p> :
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />}
        
      </header>
    </div>
  );
}

export default App;
