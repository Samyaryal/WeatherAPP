import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "80c2b95addde04faa8ba32f8b33799a2";


class App extends React.Component{
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=Manchester, uk&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  render () {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};
export default App; 