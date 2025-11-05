# 🍊 Orange Foods — Modern Food Delivery Web App Frontend only

Orange Foods is a **modern, responsive food delivery web application** built using **React.js**. It offers a sleek and intuitive user experience inspired by leading delivery platforms. The app allows users to browse diverse cuisines, view detailed food information, and manage their cart — all in a **frontend-only implementation** using mock JSON data and services.

---

> **Note:** The Project builts for only frontend demonstration.

## 🚀 Features

### 🏠 **Home Page**
![Home Page](./public/Home%20Page.gif)
> The Home Page serves as the central hub for exploring the full Orange Foods experience — built with a modern, mobile-first design.

- **Elegant Navigation Bar:**  
  Fixed, minimalistic navigation bar with logo, category links, search bar, and cart icon — ensuring quick access to any section.  
  Responsive collapse menu on smaller screens for seamless usability.

- **Dynamic Hero Section:**  
  Auto-sliding carousel featuring the best dishes, discounts, and exclusive offers.  
  Includes call-to-action buttons like “Order Now” and “Explore Menu.”

- **Special Offers Section:**  
  Displays limited-time offers and deals fetched dynamically from JSON data.  
  Uses animated banners and hover effects to enhance engagement.

- **Category-Based Food Listing:**  
  Organized categories such as _South Indian_, _North Indian_, _Street Food_, _Beverages_, and _Desserts._  
  Allows quick filtering to help users find their favorite dishes instantly.

- **Why Choose Orange Foods:**  
  Highlights brand values — _Fresh Ingredients_, _Quick Delivery_, _Authentic Taste_, and _Affordable Pricing._  
  Each point illustrated with crisp icons and smooth reveal animations.

- **Newsletter Subscription:**  
  Integrated subscription form with validation to collect emails for marketing campaigns.  
  Responsive layout ensures a clean look on both mobile and desktop devices.

- **Modern Footer:**  
  Contains social links, contact details, and quick navigation shortcuts.  
  Styled with gradient backgrounds and elegant hover effects.

- **Responsiveness:**  
  Designed with CSS Grid and Flexbox ensuring perfect adaptability across all screen sizes — from mobile to large desktop monitors.

### 🍽️ **Food Display**

![Food Display](./public//Food%20Items.gif)

> The Food Display section showcases all dishes dynamically and connects directly with the Cart and Food Details pages.

- **Dynamic Food Grid:**  
  Each food card displays an image, price, rating, and “Add to Cart” button.  
  Uses `FoodService` to fetch real-time data from JSON files.

- **Interactive Cart Integration:**  
  Allows adding, removing, and updating quantity directly from the display.  
  Real-time cart count updates across the navbar via React Context.

- **Category Filter:**  
  Auto-updates the display when a category is selected.  
  Optimized for performance with minimal re-rendering using React state management.

- **Search Functionality:**  
  Global search in the navbar filters dishes instantly based on user input.  
  Case-insensitive and works across all categories.

- **Responsive Design:**  
  Fully adaptive layout with 2–4 cards per row on desktop and a single-column layout on mobile.  
  Built using modern CSS with hover animations and subtle shadows for a premium feel.

- **Image Optimization:**  
  Uses locally stored, compressed, high-quality dish images for faster load times.

### 🔍 Food Details Page

![Food Details](./public/Food%20Details.gif)

- Detailed view of a selected dish.
- Includes:
  - Large high-resolution image.
  - Name, description, price, and category.
  - Rating , Quantity , time,
  - Tags
  - Nutrition facts (Calories, Protein, Carbs, Fat).
  - Preparation information.
- Add/Remove from cart functionality with quantity control.
- `Go to cart` feature.
- Clean, modern UI with focus on visuals and readability.

---

### 🔐 Login & Sign-Up System

The **LoginPopup** component provides a responsive, modal-based authentication interface for users.  
It is implemented using **React Portals** to overlay the form above all UI layers for a clean, app-like experience.

![Login](./public/login.png)

#### 🧠 Core Features
- **Dual Mode Authentication:** Switches between *Login* and *Sign Up* modes dynamically.  
- **Local Storage Demo:** User credentials are temporarily stored and validated locally for MVP/demo purposes.  
- **Context Integration:** Uses `AuthContext` for shared authentication logic across components.  
- **Form Handling:** Real-time validation and state management using React’s `useState`.  
- **UI/UX Highlights:**
  - Minimalist overlay with blur background.  
  - Smooth transitions between login and sign-up states.  
  - Integrated logo and branding for *Orange Foooods*.  
  - Responsive, mobile-friendly layout.

---

### 🛒 Cart System

![Cart](./public/checkout.png)

- Managed through **React Context** (`StoreContext`).
- Add, remove, and update quantity of items in cart.
- Displays total price dynamically.
- Data persists during session for smooth user experience.

---

### 🧭 About Us Page

![About Us](./public/aboutus.gif)

The **About Us** page introduces _Orange Foods_ as a modern food delivery platform designed to connect users with their favorite dishes from multiple cuisines.  
It highlights:

- The brand story and mission of bringing authentic flavors to every doorstep.
- Commitment to **freshness**, **quality**, and **timely delivery**.
- Integration of modern technology to enhance the food discovery and ordering experience.
- A clean, responsive design with imagery and smooth text animations for better engagement.

---

### 🔐 Privacy Policy Page

![Privacy Policy](./public/privacypolicy.png)

The **Privacy Policy** page outlines how _Orange Foods_ collects, uses, and protects user data.  
It covers:

- **Data Collection:** User details during account creation, orders, and payment.
- **Usage:** To improve services, personalize offers, and process payments securely.
- **Data Protection:** End-to-end encryption and compliance with GDPR guidelines.
- **Third-Party Services:** Mentions integrations (like payment gateways) and their privacy terms.
- Transparent, easy-to-read format that instills user trust and accountability.

---

### 💳 Payment Page

![Payment](./src/assets/about_hero1.jpg)

The **Payment Page** provides a secure and seamless checkout experience (frontend only).  
Features include:

- Option for **Cards**, **UPI**, and **Cash on Delivery**.
- Modern UI design.

---

### 📦 My Orders Page

![My Orders](./public/Myorders.png)

The **My Orders** page enables users to track and manage their past and current orders.  
It includes:

- Order history with date, amount, and detailed breakdown.
- Interactive, card-based layout with responsive grid.
- Displayed based on the data stored in the local storage.

---

### 🛒 Checkout / Place Order Page

The **Checkout Page** (or _Place Order_) is the final step of the ordering journey.  
It features:

- Summary of cart items with editable quantities and real-time price updates.
- Delivery address form with validation and saved-address options.
- Coupon and discount application before final payment.
- Optimized for quick navigation and a distraction-free experience.

---

### ⚙️ Service-Based Architecture

- Food data and operations handled via `FoodService`.
- Simulated backend using local JSON data for easy scalability.
- Clean separation of logic and UI.

---

### 🌐 Responsive Design

- Fully responsive across devices (mobile, tablet, desktop).
- Modern grid and flex layouts.
- Adaptive typography and spacing for accessibility.

> **Note:** All pages are fully responsive, optimized for accessibility, and maintain a consistent design language across the _Orange Foods_ platform.

---

## 🧩 Tech Stack

| Category           | Technology                                 |
| ------------------ | ------------------------------------------ |
| Frontend Framework | React.js (with Hooks)                      |
| State Management   | Context API                                |
| Data Handling      | Local JSON file via Services               |
| Styling            | CSS (Modern & Responsive)                  |
| Routing            | React Router                               |
| UI Design          | Modern, minimal, vibrant with orange theme |
| Build Tool         | Vite                                       |

---

## 🧠 Project Highlights

- **No backend required** — built for demonstration of frontend logic and architecture.
- **Service + Context pattern** mimics real API data flow.
- **Scalable UI architecture** that supports easy backend integration (e.g., Node.js, Firebase, etc.).
- **Minimal yet powerful** design with focus on visuals and UX.
- **Easily extendable** — you can add login, orders, payments, and backend API integration.

## 🧭 How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/orange-foods.git
   cd orange-foods
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the project**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🌟 Future Enhancements

- 🔑 Authentication (User Login / Signup)
- 💳 Online Payment Integration
- 📦 Order Tracking & History
- 🧑‍🍳 Admin Dashboard for managing dishes
- ☁️ Backend Integration (Node.js + MongoDB or Firebase)

---

## 🧡 Acknowledgements

- React.js Documentation
- Meta AI for the images.
- Inspiration from Swiggy, Zomato, and UberEats UI

---

### 🏁 License

This project is open-source and available under the **MIT License**.
