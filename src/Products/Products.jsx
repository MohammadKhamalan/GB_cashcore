// import React, { useState, useEffect } from 'react';
// import { makeRequest } from '../axios';
// import './Products.scss';

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await makeRequest.get('/product');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);
//   const handleDelete = async (waiting_id) => {
//     try {
//       // Call the delete endpoint based on the user_id
//       await makeRequest.delete(`/product/${waiting_id}`);

//       // Update the UI by fetching the updated waiting accounts list
//       const updatedResponse = await makeRequest.get('/product');
//       setProducts(updatedResponse.data);
//     } catch (error) {
//       console.error('Error deleting product :', error);
//     }
//   };
//   return (
   
// <div className="products-container">
//   <h1>All Products</h1>
//   <div className="products-list">
//     {products.map((product) => (
//       <div key={product.product_id} className="product-box">
//         <img src={`${product.product_photo}`} alt="Product" />
//         <div className="category">
//                     <p><strong>Category:</strong> {product.product_category}</p>
// </div>

        // <div className="product-details">
        //   <div className="name-price">
        //     <strong>{product.product_name}</strong>
        //     <p> {product.product_price} <strong>JOD</strong></p>
        //   </div>
        //   <p>{product.product_description}</p>
        //   <button className="delete-button"
        //                             onClick={() => handleDelete(product.product_id)} 

        //           >Delete</button>
        //   {/* Render other product details and fields as needed */}
        // </div>
//       </div>
//     ))}
//   </div>
// </div>
//   );
// };

// export default Products;
import React, { useState, useEffect } from 'react';
import { makeRequest } from '../axios';
import './Products.scss';
import productPhotoPaths from '../productConfig';
const Products = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    product_name: '',
    product_description: '',
    product_price: '',
    product_category: '',
    product_photo: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await makeRequest.get('/product');
        setProducts(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (product_id) => {
    try {
      await makeRequest.delete(`/product/${product_id}`);
      const updatedResponse = await makeRequest.get('/product');
      setProducts(updatedResponse.data);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      // Create FormData object to handle file upload
      const formData = new FormData();
      formData.append('product_name', newProduct.product_name);
      formData.append('product_description', newProduct.product_description);
      formData.append('product_price', newProduct.product_price);
      formData.append('product_category', newProduct.product_category);
      formData.append('product_photo', newProduct.product_photo);

      // Make POST request to add a new product
      await makeRequest.post('/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setShowModal(false);
      // Refresh the product list after adding the new product
      const updatedResponse = await makeRequest.get('/product');
      setProducts(updatedResponse.data);
      // Clear the new product form fields
      setNewProduct({
        product_name: '',
        product_description: '',
        product_price: '',
        product_category: '',
        product_photo: null,
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleFileChange = (event) => {
    setNewProduct({ ...newProduct, product_photo: event.target.files[0] });
  };

  return (
    <div className="products-container">
      <h1>All Products</h1>
     
      <div className="products-list">
        {products.map((product) => (
          <div key={product.product_id} className="product-box">
             <img src={productPhotoPaths[product.product_photo] || null} alt="Product" />
        <div className="category">
                    <p><strong>Category:</strong> {product.product_category}</p>
</div>
 <div className="product-details">
          <div className="name-price">
            <strong>{product.product_name}</strong>
            <p> {product.product_price} <strong>JOD</strong></p>
          </div>
          <p>{product.product_description}</p>
          <button className="delete-button"
                                    onClick={() => handleDelete(product.product_id)} 

                  >Delete</button>
          {/* Render other product details and fields as needed */}
        </div>            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

