import React, { useContext, useState } from "react";
import { PanierContext } from "./Mainpage";
const Adminform = ()=>{
    const [inputs,setInputs] = useState({
        title:'',
        price:'',
        description:'',
        category:"men's clothing",
        image:''
    })
    // const {articles,setArticles} = useContext(PanierContext)
    const handleChange = (e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
    }
    const handleFiles = (e)=>{
        setInputs({...inputs,[e.target.name]:URL.createObjectURL(e.target.files[0])})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(inputs)
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputs),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Added to database:", data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
    }
    return(
        <>
        <h2>Dashboard - Ajouter Produit</h2>
        <form action="">
            <label > Nom Produit
                <input type="text" name="title" value={inputs.title} onChange={handleChange}/>
            </label><br />
            <label > Prix
                <input type="text" name="price" value={inputs.price} onChange={handleChange}/>
            </label><br />
            <label>Category
                <select name="category" value={inputs.category} id="" onChange={handleChange}>
                    <option value="men's clothing">men's clothing</option>
                    <option value="jewelry">jewelry</option>
                    <option value="electronics">electronics</option>
                    <option value="other">other</option>
                </select>
            </label><br />
            <label >Description 
                <input type="text" name="description" value={inputs.description} onChange={handleChange} />
            </label><br />
            <label >Image
                <input type="file" name="image" onChange={handleFiles}/>
            </label><br />
            <button onClick={handleSubmit}>Enregistrer</button>
        </form>
        </>
    )
}

export default Adminform