import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Button';

import styled from 'styled-components';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <h1 className ="heading" >HELLO WORLD!!!</h1>
          <SayFullName name="Kostya" surname="Kurganov" link="https://vk.com/babanlo" />
          <SayFullName name="Olya" surname="Volkova" link="https://vk.com/babanlo" />
      </div>
    );
  }
}


function SayFullName(props){
  return (
      <div>
          <h1> Мое имя  {props.name}, фамилия - {props.surname} </h1>
          <a href={props.link}>Ссылка на мой профиль</a>
      </div>
  )
}

export default App;
