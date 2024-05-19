import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MemePage from './components/Memes/MemePage';
import LifeStoriesPage from './components/LifeStories/LifeStoriesPage';
import FictionalStoriesPage from './components/FrictionalStories/FictionalStoriesPage';
import StoriesPage from './components/stories/StoriesPage';
import  OtherOptionsPage from './components/OtherOptions/OtherOptionsPage';


function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/meme-page" element={<MemePage/>}/>
            <Route path="/life-stories-page" element={<LifeStoriesPage/>}/>
            <Route path="/fictional-stories-page" element={<FictionalStoriesPage/>}/>
            <Route path="/stories-page" element={<StoriesPage/>}/>
            <Route path="/otheroptions-page" element={<OtherOptionsPage/>}/>
            
            
        </Routes>
        </BrowserRouter>
    );
}

export default App;

