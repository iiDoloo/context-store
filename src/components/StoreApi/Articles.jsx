import React, { useContext, useEffect, useReducer, useState } from "react";
import { PanierContext } from "./Mainpage";
const Articles = ()=>{
    const {panier,dispatch}= useContext(PanierContext)
    const {articles,setArticles} = useContext(PanierContext)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setArticles(json))
    },[])

    const addtoCart = (produit)=>{
        dispatch({ type: 'AJOUTER', produit });
    }

    return(
        <>
        <div className="articles-container">
            <h2>Articles</h2>
            {articles && articles.map((x,i)=>{
                return(
                    <div className="article" key={i}>
                        <p>{x.title} - Prix : {x.price}</p>
                        <img src={x.image} width={150} height={150} alt="" />
                        <button onClick={()=>{addtoCart(x)}}>Add To Cart</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Articles