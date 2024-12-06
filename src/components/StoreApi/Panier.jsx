import React, { useContext, useEffect, useReducer, useState } from "react";
import { PanierContext } from "./Mainpage";
const Panier = ()=>{
    const {panier,dispatch} = useContext(PanierContext)

    const removeItem = (produit)=>{
        dispatch({ type: 'SUPPRIMER', produit });
        console.log(panier)
    }
    return(
        <>
        {panier.length==0?
        <div>
            <h3>Votre panier est vide</h3>
            <h5>Veuillez acheter des produits</h5>
        </div>
        :
        <div className="panier-container">
            <h2>Panier d'Achats : </h2>
                {panier && panier.map((item,i)=>{
                    return(
                        <div className="panier" key={i}>
                            <p>{item.title} - Prix : {item.price}</p>
                            <img src={item.image} width={150} height={150} alt="" />
                            <button onClick={()=>{removeItem(item)}}>Retirer</button>
                        </div>
                    )
                })}
            </div>
            }
        
            
        </>
    )
}

export default Panier