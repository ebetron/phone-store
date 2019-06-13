import React, {Component} from 'react';

const ProductContext = React.createContext();
//Provider - provides all info for application, sits on top of application
//Consumer - use this object to "consume" info from provider

class ProductProvider extends Component {
    render(){
        return(
            <ProductContext.Provider value="hello from phone app">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};