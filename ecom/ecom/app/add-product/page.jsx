"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import { FaBox, FaShoppingCart, FaTags, FaChartLine } from "react-icons/fa";
import Benefits from "./Benefits";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log(data);
      alert("Product added successfully!");
      setForm({ name: "", description: "", price: "" });
    } catch (err) {
      console.error(err);
      alert("Error adding product");
    }
  };

  return (
    <Container>
      <div className="min-h-[80vh] py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Form Section (Left) */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Add New Product
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill in the details below to list your product on our
                  marketplace.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter product name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Enter product description"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="0.00"
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                  >
                    Add Product
                  </button>
                </form>
              </div>
            </div>

            {/* Benefits Section (Right) */}
            <div className="w-full md:w-1/2 p-8 md:p-12 bg-gray-50">
                <Benefits/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddProduct;
