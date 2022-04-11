import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './components/Button';
import Image from './components/Image';
import List from './components/List';
import Sound from './components/Sound';


ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Button text="Click me!"/>
    <Image src='/img/bg.jpg' alt='Background'width='300' height='300'/>
    <List items={new List(['Izuku','Uraraka','Shoto'])}/>
    <Sound src='/sounds/music.mp3' type='audio/mpeg' autoplay="false"/>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
