import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider - provides all info for application, sits on top of application
//Consumer - use this object to "consume" info from provider

class ProductProvider extends Component {
    state = {
        products: [],
        details: detailProduct
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(()=> {
            return {products: tempProducts}
        });
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    handleDetail = (id) => {
        const product = this.getItem();
        this.setState(() => {
            return {details:product}
        });
    }
    addToCart = (id) => {
        console.log(`hello from add to cart. The id is ${id}`);
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