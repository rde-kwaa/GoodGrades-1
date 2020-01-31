import React from 'react';
import { Typography } from '@material-ui/core';

var style = {
  backgroundColor: '#29b6f6e3',
  textAlign: 'center',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '62px',
  width: '100%'
};

var phantom = {
  display: 'block',
  width: '100%'
};

var wtc = {
  width: 40,
  height: 'auto',
  float: 'left',
  paddingTop: 14,
  paddingLeft: 20
};

var blurb = {
  color: 'white',
  fontSize: 11,
  float: 'left',
  paddingTop: 22,
  paddingLeft: 32
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <img src='img/wtc-logo.png' style={wtc} threshold='200' />
        <Typography style={blurb} noWrap={false} paragraph={false}>
          {`This project was developed in conjuction with WeThinkCode's SME
          module. `}
        </Typography>
        {children}
      </div>
    </div>
  );
}

export default Footer;
