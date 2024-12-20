import React, { useState } from "react";

const ProductManagement = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const addProduct = () => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setNewProduct({ name: "", price: "", stock: "" });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Manajemen Produk</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Nama Produk"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          className="p-2 mb-2 border rounded"
        />
        <input
          type="number"
          placeholder="Harga"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="p-2 mb-2 border rounded"
        />
        <input
          type="number"
          placeholder="Stok"
          value={newProduct.stock}
          onChange={(e) =>
            setNewProduct({ ...newProduct, stock: e.target.value })
          }
          className="p-2 mb-2 border rounded"
        />
        <button
          onClick={addProduct}
          className="bg-green-500 text-white p-2 rounded"
        >
          Tambah Produk
        </button>
      </div>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="border-b py-2">
            {product.name} - Rp. {product.price} - Stok: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
