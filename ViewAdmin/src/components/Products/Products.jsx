import React, { useEffect } from 'react'
import { getProd } from '../../redux/ProductsActions';
import { useDispatch, useSelector } from 'react-redux';
import './Products.css'

const Products = () => {

  const productos = useSelector((state) => state.products);
  console.log(productos);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getProd());
    console.log(productos);
  }, []);

  return (
    <div>
        <div style={{display:'flex', justifyContent:'space-around', marginBottom: 50}}>
            <p>Products</p>
            <p>Stock</p>
          
        </div>
        {
        productos?.products.map((prod) => {
          return(
            <div className='divProds'>
                <div className='divName'>
                    <p>{prod.name}</p>
                </div>
                <div className='divStock'>
                    <p>{prod.stock}</p>
                </div>
            </div>
          );
        })}
    </div>
  )
}

export default Products;