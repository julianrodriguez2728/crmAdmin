import React, { useEffect, useState } from 'react';
import { getProd } from '../../redux/ProductsActions';
import { useDispatch, useSelector } from 'react-redux';
import './Products.css';

const Products = () => {
  const productos = useSelector((state) => state.products);
  console.log(productos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProd());
    console.log(productos);
  }, []);

  // Estado local para manejar el nuevo valor del stock de cada producto
  const [updatedProducts, setUpdatedProducts] = useState(() => {
    // Intentar obtener los datos del localStorage y usarlos si existen
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : productos?.products;
  });

  // Función para guardar los cambios en el localStorage
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  }, [updatedProducts]);

  // Función para guardar el nuevo stock en el estado local
  const handleSaveStock = (productId, newStock) => {
    const updatedProductList = updatedProducts.map((prod) =>
      prod.id === productId ? { ...prod, stock: newStock } : prod
    );
    setUpdatedProducts(updatedProductList);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 50 }}>
        <p>Products</p>
        <p>Stock</p>
      </div>
      {updatedProducts?.map((prod) => {
        return (
          <div className='divProds' key={prod.id}>
            <div className='divName'>
              <p>{prod.name}</p>
            </div>
            <div className='divStock'>
              {prod.isEditing ? (
                <input
                  type='text'
                  value={prod.stock}
                  onChange={(e) => handleSaveStock(prod.id, e.target.value)}
                />
              ) : (
                <p>{prod.stock}</p>
              )}
            </div>
            <div className='divEdit'>
              {prod.isEditing ? (
                <button onClick={() => handleSaveStock(prod.id, prod.stock)}>Guardar</button>
              ) : (
                <button
                  onClick={() =>
                    setUpdatedProducts((prevProducts) => {
                      return prevProducts.map((prevProd) => {
                        if (prevProd.id === prod.id) {
                          return { ...prevProd, isEditing: true };
                        }
                        return prevProd;
                      });
                    })
                  }
                >
                  Editar Stock
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
