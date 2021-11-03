import React, {useState, useEffect} from 'react';
import axios from 'axios';

import RelatedProducts from '../related_products/RelatedProducts.jsx';
import YourOutfit from '../related_products/YourOutfit.jsx';

var outfitList = [];
  // product object (category, name, description, 'features')
  // 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")
const url = 'http://localhost:3000';

const RelatedProductsItem = (props) => {
  const [styles, setStyles] = useState({});
  const [currentStyleId, setCurrentStyleId] = useState(0);
  const [outfits, setOutfits] = useState([]);
  const [addToOutfit, setAddToOutfit] = useState(false);

  // useEffect(() => {
  //   axios.get(`${url}/products/${currentProduct.id}/styles`)
  //     .then(res => {
  //       console.log(res);
  //       setStyles(res.results);
  //     })
  // }, [])

  const updateOutfitList = (copyArray) => {
    outfitList = copyArray;
    setOutfits(copyArray);
  }

  return (
    // <div className='overview-container'>

    //   <RelatedProducts currentProduct={props.currentProduct} fetchNewProduct={props.fetchNewProduct.bind(this)}/>
    //   <YourOutfit currentProduct={props.currentProduct} currentStyle={styles[currentStyleId]}/>
    // </div>
    <p>overview</p>
  )
};

export default RelatedProductsItem;