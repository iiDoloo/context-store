import React, { createContext, useContext, useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Panier from "./Panier";
import Articles from "./Articles";
import Navbar from "./Navbar";
import Adminform from "./Adminform";

export const PanierContext = createContext()
const Mainpage = ()=>{
    const reducer = (state,action)=>{
        switch(action.type){
            case 'AJOUTER':{
                return [...state,action.produit]
            }
            case 'SUPPRIMER':{
                return state.filter((p) => p.id !== action.produit.id);
            }
            case 'VIDER':{
                return[]
            }
            default: return state
        }
    }
    const [panier, dispatch] = useReducer(reducer,[])
    const [articles,setArticles] = useState([])
    return(
        <>
        <PanierContext.Provider value={{panier,dispatch,articles,setArticles}}>
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Articles />} />
                <Route path="/panier" element={<Panier />} />
                <Route path="/adminform" element={<Adminform />} />
            </Routes>
        </Router>
        </PanierContext.Provider>
        </>
    )
}

export default Mainpage