import axios from 'axios';
import { getProducts } from './ProductsSlice';


export const getProd = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/products');
    dispatch(getProducts(response.data));
  } catch (error) {
    console.log(error);
  }
};
