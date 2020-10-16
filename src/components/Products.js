import React, { Component } from 'react'
import FormatCurrency from '../util'

class Products extends Component {
    render() {
        console.log(this.props.products)
        return (
            <div>
                <ul className='products'>
                    {
                        this.props.products?.map((product) =>(
                            <li key ={product._id}>
                                <div className="product">
                                    <a href ={"#" + product._id}>
                                        <img src={product.image} alt={product.title}></img>
                                        <p>
                                            {product.title}
                                        </p>
                                    </a>
                                    <div className="product-price">
                                             <div>{ FormatCurrency (product.price)}</div>
                                    <button className="button primary"> Add to cart </button>
                                    </div>

                                </div>
                            </li>

                        ))}
                </ul>
            </div>
        )
    }
}

export default Products
