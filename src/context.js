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
    render(){
        return(
            <ProductContext.Provider value={{...this.state}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};