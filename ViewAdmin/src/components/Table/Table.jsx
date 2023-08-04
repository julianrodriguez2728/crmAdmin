//
//
//import React, { useEffect } from 'react'
//import { getProd } from '../../redux/ProductsActions';
//import { useDispatch, useSelector } from 'react-redux';
//
//const Table = () => {
//
//  const productos = useSelector((state) => state.products);
//  console.log(productos);
//  const dispatch = useDispatch()
//  
//  useEffect(() => {
//    dispatch(getProd());
//    console.log(productos);
//  }, []);
//
//  return (
//    <div>
//        {
//        productos?.products.map((prod) => {
//          return(
//            <div>
//              <h5>
//                {prod.name}
//                {prod.stock}
//              </h5>
//            </div>
//          );
//        })}
//    </div>
//  )
//}
//
//export default Table;
 