import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './style.scss'

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
/*  "id": "MACBOOKAIR",
    "name": "Macbook Pro Air",
    "manufacturer": "Apple",
    "price": 1099.99,
    "ultrabook": true,
    "stock": 112,
    "options": [
      "Intel Core i7",
      "SSD",
      "Long life battery"
    ]
*/
    return (
        <div className="home">
            <div className="background">
                <img src="/background.jpg" alt="background" />
                <div>
                    <h1>Liste des Produits</h1>
                </div>
            </div>
            <div className="list">
                {products.map((product) => (
                    <Link to={"/products/" + product.id} key={product.id} className="card">
                        <img src="../mac.png" alt={product.name} />
                        <div>
                            <h2>{product.name}</h2>
                            <p>{product.manufacturer}</p>
                            <p>{product.price} €</p>
                            <p>{product.stock} en stock</p>
                            {product.ultrabook ? <p>Ultrabook</p> : <p>PC portable</p>}
                            <ul>
                                {product.options.map((option) => (
                                    <li key={option}>{option}</li>
                                ))}
                            </ul>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}