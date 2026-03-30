import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Nav from './components/Nav';
import Body from './content/Body';
import Login from './components/Login';
import Bag from './components/Bags';
import Wallets from './components/Wallets';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
            
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<Aboutus/>} /> 
        </Routes>

        <Footer/>
      </BrowserRouter>
    );
  }
}


export default App;