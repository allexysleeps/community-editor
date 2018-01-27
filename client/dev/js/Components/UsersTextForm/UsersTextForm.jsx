import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
require('./UsersTextForm.sass');

const UsersTextForm = ({usersText, onClick}) => {
  return (
    <div className='users-text-form'>
      <p >{usersText}</p>
      <RaisedButton
        onClick={onClick}
        backgroundColor='#69F0AE'
        labelColor='#fff'
        label='approve'/>
    </div>
  )
};

export default UsersTextForm;