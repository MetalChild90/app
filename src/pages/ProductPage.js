import React from 'react';
import {Link} from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = ({match}) => {
    return ( <>
        <div>ProductPage</div>
        <Product id={match.params.id}/>
        <Link to='/products'>Powrot do listy produktów</Link>
    </> );
}

export default ProductPage;