# 🛍️ ecom - Next.js 15 E-Commerce Showcase

## 📋 Project Description

**ecom** is a simple, modern e-commerce application built with **Next.js 15 App Router** and secured with **NextAuth.js**. The application demonstrates a full-stack structure with public pages (landing, product list, and details) and a protected administrative dashboard for logged-in users to manage products. It uses **Route Handlers** for a mock backend to manage product data and handle authentication callbacks.

## ✨ Core Features

* **Public Access:** View the landing page, product list, and product details without logging in.
* **Authentication:** Secure login via **NextAuth.js** (supporting **Credentials** and/or **Social Login** like Google).
* **Protected Route:** A private dashboard to add new products, accessible only to authenticated users.
* **Data Handling:** Mock product data management using Next.js **Route Handlers** (`/api`).
* **Modern UI:** Built with best practices of the Next.js App Router, using **Server Components** and **Client Components**.

---

## 🚀 Setup & Installation

Follow these steps to set up and run the **ecom** project locally.

### Prerequisites

* Node.js (LTS version, e.g., 18+)
* npm or yarn

### 1. Clone the Repository

```bash
git clone [YOUR_GITHUB_REPOSITORY_LINK]
cd ecom
2. Install Dependencies
Bash

npm install
# or
yarn install
3. Configure Environment Variables
Create a file named .env.local in the root directory and add the necessary environment variables for NextAuth.js and any potential mock database/storage setup.

Example .env.local:

# NextAuth.js Configuration
NEXTAUTH_SECRET="your_very_secure_secret_key_here"
NEXTAUTH_URL="http://localhost:3000"

# Optional: Google Provider (for Social Login)
# GOOGLE_CLIENT_ID="your_google_client_id"
# GOOGLE_CLIENT_SECRET="your_google_client_secret"
4. Run the Development Server
Bash

npm run dev
# or
yarn dev
The application should now be running at: http://localhost:3000

🗺️ Route Summary
This application uses the Next.js App Router structure, defining clear routes for public and protected access.

Path	Description	Access
/	Landing Page: Contains Navbar, Hero, Product Highlights, and Footer.	Public
/login	Login Page: NextAuth.js implementation for user authentication (e.g., Credentials or Social). Redirects to /products on success.	Public
/products	Product List Page: Displays a list of all available products fetched from the mock backend.	Public
/products/[id]	Product Details Page: Shows detailed information for a specific product based on its ID.	Public
/dashboard/add-product	Protected Page: Add Product: A form for authenticated users to add a new product. Unauthenticated users are redirected to /login.	Protected
/api/auth/[...nextauth]	NextAuth.js API Route: Handles all authentication logic (sign-in, sign-out, session, etc.).	Internal API
/api/products	Route Handler: Handles fetching and creating mock product data.	Internal API
