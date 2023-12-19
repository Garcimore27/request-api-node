import './style.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
    const { id } = useParams()
    const [produit, setProduit] = useState([{
        options: []
    }]);
    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduit(data)
            })
    }, [])
    console.log(produit)
    return (
        <div className='product'>
            <div className="tout">
            <section className="info">
                <div className="titles">
                    <h1>Informations du {produit[0].id}</h1>
                    <p>Modèle : {produit[0].name}</p>
                    <p>Fabricant : {produit[0].manufacturer}</p>
                    <p>Prix : {produit[0].price} €</p>
                    <p>Stock : {produit[0].stock} pièces</p>
                    <p>UltraBook : {produit[0].ultrabook ? "oui" : "non"}</p>
                    <ul>Options : 
                        {produit[0].options ? produit[0].options.map(option => (
                        <li key={option}>{option}</li>
                    )) : <li key="1">Aucune option</li>}
                    </ul>
                </div>
            </section>
            </div>
        </div>
    )

}