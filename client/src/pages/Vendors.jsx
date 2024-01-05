import React from 'react';
import tshirtImage from '../assets/products/tshirt.png';
import coffeeImage from '../assets/products/coffee-mug.png';
import bottleImage from '../assets/products/bottle.png';
import sweatImage from '../assets/products/sweatshirt.jpg';

function Product() {
    return (
        <div>
            <h1>Product Page</h1>

            <div className="product-container">
            <div className="product">
                <img src={tshirtImage} alt="t-shirt" />
                <div className="description">Get My T-Shirt</div>
                <h3>Only $25</h3>
                <input type="number" defaultValue="1" min="1" />
                <button className="buy-now">Buy Now</button>
            </div>
            
            <div className="product">
                <img src={coffeeImage} alt="coffee mug" />
                <h3>Only $15</h3>
                <div className="description">Be the first to own my coffee mug</div>
                <input type="number" defaultValue="1" min="1" />
                <button className="buy-now">Buy Now</button>
            </div>
            
            <div className="product">
                <img src={bottleImage} alt="coffee mug" />
                <h3>Only $35</h3>
                <div className="description">Grab a bottle</div>
                <input type="number" defaultValue="1" min="1" />
                <button className="buy-now">Buy Now</button>
            </div>
            
            <div className="product">
                <img src={sweatImage} alt="coffee mug" />
                <h3>Only $35</h3>
                <div className="description">Stay warm in this amazing sweatshirt</div>
                <input type="number" defaultValue="1" min="1" />
                <button className="buy-now">Buy Now</button>
            </div>
        </div>
    </div>
    );
}

export default Product;
