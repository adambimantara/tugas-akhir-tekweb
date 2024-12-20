import React from "react";

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Toko Kelontong</h1>
      <p className="mb-4">Selamat datang, {user.name}!</p>{" "}
      {/* Menampilkan nama pengguna */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded">
          <h3 className="font-semibold">Total Penjualan</h3>
          <p className="text-lg">Rp. 5.000.000</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded">
          <h3 className="font-semibold">Keuntungan Hari Ini</h3>
          <p className="text-lg">Rp. 1.000.000</p>
        </div>
        <div className="bg-red-100 p-4 rounded">
          <h3 className="font-semibold">Stok Rendah</h3>
          <p className="text-lg">5 Produk</p>
        </div>
      </div>
      <button onClick={onLogout} className="bg-red-500 text-white p-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
