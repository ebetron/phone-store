import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider - provides all info for application, sits on top of application
//Consumer - use this object to "consume" info from provider

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        details: detailProduct
    }
    handleDetail = () => {
        console.log('hello from detail');
    }
    addToCart = () => {
        console.log('hello from add to cart');
    }
    render(){
        return(
            <ProductContext.Provider value={{
                    ...this.state, 
                    handleDetail: this.handleDetail, 
                    addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};