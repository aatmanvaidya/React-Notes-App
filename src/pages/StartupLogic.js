import React from 'react'
import "../App.css";
import { Routes, Route } from "react-router-dom";
import NotesListPage from "../pages/NotesListPage";
import NotePage from "../pages/NotePage";
import Header from '../components/Header';

const StartupLogic = () => {
    return (
        <div className='container dark'>
            <div className='app'>
            <Header />
                <Routes>
                    <Route path="/" exact element={<NotesListPage />} />
                    <Route path="/note/:id" element={<NotePage />} />
                </Routes>
            </div>
        </div>
    )
}

export default StartupLogic