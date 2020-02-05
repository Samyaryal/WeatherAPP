import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "80c2b95addde04faa8ba32f8b33799a2";


class App extends React.Component{
  getWeather = async () => {
    const api_call = await fetch (``)
  }
  render () {
    return (
      <div>
        <Title />
        <Form />
        <Weather />
      </div>
    );
  }
};
export default App; 