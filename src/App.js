import React from 'react';
import axios from 'axios';
import './App.css';
import { Container } from 'react-bootstrap';

class App extends React.Component{

  async apiCall(){
  try{
    const result = await axios.get("http://localhost:5000/api/collections/");
    const data = result.data;

    console.log(data);
    
    this.setState({data});

  }
  catch(error){
    console.log(error);
  }
  }


  componentDidMount(){
    this.apiCall()
  }

  render(){  
    return (
      <Container className="background" fluid>
        Testing
      </Container>
      );
  }};


export default App;
