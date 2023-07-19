import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';




const App = ()=> {

const pageSize = 6;
const apiKey = process.env.REACT_APP_NEWS_API


const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>

        
        <Navbar/>
        
        <LoadingBar
        color='#f11946'
        progress={progress}
        />

        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key= "General" pageSize ={pageSize} country= "in" category='General' />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key= "Business" pageSize ={pageSize} country= "in" category='Business' />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key= "Entertainment" pageSize ={pageSize} country= "in" category='Entertainment' />} />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key= "General" pageSize ={pageSize} country= "in" category='General' />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key= "Health" pageSize ={pageSize} country= "in" category='Health' />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key= "Science" pageSize ={pageSize} country= "in" category='Science' />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key= "Sports" pageSize ={pageSize} country= "in" category='Sports' />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key= "Technology" pageSize ={pageSize} country= "in" category='Technology' />} />

          
        </Routes>

        
        
        </BrowserRouter>
      </div>
    )

}
export default App