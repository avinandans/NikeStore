import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import popularSales from '../store/slice/ProductSlice';

const ProductDetails = () => {
 const {id} = useParams();
  // const products = useSelector(popularSales)

  return (
    <>
      {`${id}`}
    </>
  )
}

export default ProductDetails