import { configureStore } from "@reduxjs/toolkit";
import products from './ProductsSlice'
import users from './UsersSlice'


export default configureStore({
    reducer:{
        products: products,
        users: users,
        
    }
})