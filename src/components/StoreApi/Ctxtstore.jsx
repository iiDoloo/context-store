import React, { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext({})

const Articles = ()=>{
    const [cart,setCart] = useContext(StoreContext)
    const [articles,setArticles] = useState(null)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setArticles(json))
    },[])
    
    useEffect(()=>{
        console.log(cart)
    },[cart])
    const addtoCart = (id)=>{
        console.log(articles.filter((x,i)=>x.id==id))
        const item = articles.filter((x,i)=>x.id==id)
        setCart([...cart,...item])
    }
    return(
        <>
        {articles && articles.map((x,i)=>{
            return(
                <div key={x.id}>
                    <p>{x.title} - Price : {x.price}</p>
                    <img src={x.image} width={150} height={150}alt="" />
                    <button onClick={()=>{addtoCart(x.id)}}>Add to cart</button>
                </div>
            )
        })}
        </>
    )

}

const Cart = ()=>{
    const [cart,setCart] = useContext(StoreContext)
    const removeArticle = (id)=>{
        const updatedCart = cart.filter((x,i)=>x.id!=id)
        setCart(updatedCart)

    }
    return(
        <>
        <h2>Your Cart :</h2>
        {cart && cart.map((x,i)=>{
            return(
                <div key={i}>
                    <p>{x.title} - Price : {x.price}</p>
                    <img src={x.image} width={150} height={150}alt="" />
                    <button onClick={()=>{removeArticle(x.id)}}>Remove</button>
                </div>
            )
        })}
        </>
    )
}
const Ctxtstore = ()=>{
    const [cart,setCart] = useState([])
    return(
        <>
        <StoreContext.Provider value={[cart,setCart]}>
            <Articles></Articles>
            <Cart></Cart>
        </StoreContext.Provider>
        </>
    )
}
export default Ctxtstore