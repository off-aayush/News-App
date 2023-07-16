import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API


  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>

        
        <Navbar/>
        
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />

        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "General" pageSize ={this.pageSize} country= "in" category='General' />} />
          <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "Business" pageSize ={this.pageSize} country= "in" category='Business' />} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "Entertainment" pageSize ={this.pageSize} country= "in" category='Entertainment' />} />
          <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "General" pageSize ={this.pageSize} country= "in" category='General' />} />
          <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "Health" pageSize ={this.pageSize} country= "in" category='Health' />} />
          <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "Science" pageSize ={this.pageSize} country= "in" category='Science' />} />
          <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "Sports" pageSize ={this.pageSize} country= "in" category='Sports' />} />
          <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "Technology" pageSize ={this.pageSize} country= "in" category='Technology' />} />

          
        </Routes>

        
        
        </BrowserRouter>
      </div>
    )
  }
}
