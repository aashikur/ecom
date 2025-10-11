"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import Benefits from "./Benefits";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AddProduct = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // Initial form state
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    offerPrice: "",
    category: "",
    image: [""], // Array for image URLs
    userId: session?.user?.email || "",
  });

  // Loading state
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Auth check
  if (!session) {
    router.push("/login");
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "price" || name === "offerPrice" ? parseFloat(value) || "" : value,
    }));
  };

  // Handle image URL changes
  const handleImageUrlChange = (index, value) => {
    const newImages = [...form.image];
    newImages[index] = value;
    setForm(prev => ({
      ...prev,
      image: newImages
    }));
  };

  // Add new image URL input
  const addImageUrl = () => {
    setForm(prev => ({
      ...prev,
      image: [...prev.image, ""]
    }));
  };

  // Remove image URL input
  const removeImageUrl = (index) => {
    setForm(prev => ({
      ...prev,
      image: prev.image.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        ...form,
        image: form.image.filter(url => url.trim() !== ""), // Remove empty URLs
        date: Date.now(),
      };

      console.log("form subbmited: ", productData)

      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to add product");
      }

      alert("Product added successfully!");
      setForm({
        name: "",
        description: "",
        price: "",
        offerPrice: "",
        category: "",
        image: [""],
        userId: session?.user?.email || "",
      });
    } catch (err) {
      console.error(err);
      alert(err.message || "Error adding product");
    }
  };

  // Replace the file input with URL inputs
  const renderImageUrlInputs = () => (
    <div className="space-y-4">
      {form.image.map((url, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="url"
            value={url}
            onChange={(e) => handleImageUrlChange(index, e.target.value)}
            placeholder="Enter image URL"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
          <button
            type="button"
            onClick={() => removeImageUrl(index)}
            className="px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addImageUrl}
        className="text-blue-600 hover:text-blue-700 font-medium"
      >
        + Add Another Image URL
      </button>
    </div>
  );

  // Replace the file input section with this in your form
  const imageInputSection = (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Product Image URLs
      </label>
      {renderImageUrlInputs()}
    </div>
  );

  // Update your form's image input section with {imageInputSection}
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
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      placeholder="Enter product category"
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

                  <div className="grid grid-cols-2 gap-4">
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
                          step="0.01"
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Offer Price
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">$</span>
                        <input
                          type="number"
                          name="offerPrice"
                          value={form.offerPrice}
                          onChange={handleChange}
                          placeholder="0.00"
                          step="0.01"
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {imageInputSection}

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
              <Benefits />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddProduct;
