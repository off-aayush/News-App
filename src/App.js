import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {

  pageSize = 6;

  render() {
    return (
      <div>
        <BrowserRouter>

        
        <Navbar/>

        <Routes>
          <Route path="/" element={<News key= "General" pageSize ={this.pageSize} country= "in" category='General' />} />
          <Route path="/business" element={<News key= "Business" pageSize ={this.pageSize} country= "in" category='Business' />} />
          <Route path="/entertainment" element={<News key= "Entertainment" pageSize ={this.pageSize} country= "in" category='Entertainment' />} />
          <Route path="/general" element={<News key= "General" pageSize ={this.pageSize} country= "in" category='General' />} />
          <Route path="/health" element={<News key= "Health" pageSize ={this.pageSize} country= "in" category='Health' />} />
          <Route path="/science" element={<News key= "Science" pageSize ={this.pageSize} country= "in" category='Science' />} />
          <Route path="/sports" element={<News key= "Sports" pageSize ={this.pageSize} country= "in" category='Sports' />} />
          <Route path="/technology" element={<News key= "Technology" pageSize ={this.pageSize} country= "in" category='Technology' />} />

          
        </Routes>

        
        
        </BrowserRouter>
      </div>
    )
  }
}
