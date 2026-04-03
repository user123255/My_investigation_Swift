# My Investigation Swift

A platform designed to help people recover misplaced belongings, reconnect found items with their rightful owners, and access emergency support when needed.

## 📖 Project Overview

**My Investigation Swift** is a web application built to solve the everyday challenge of losing and finding items. It allows users to report lost or found belongings, search for possible matches, and view item locations on an interactive map.

The application focuses on simplicity and usability, making it easy for anyone to interact with the system. It also includes an Emergency AI feature that provides quick access to emergency contact numbers and nearby services such as hospitals and police stations.

This project was developed as part of my university coursework, with the goal of building a functional system that integrates external APIs, supports user interaction, and demonstrates real-world deployment. Beyond the core requirements, I focused on improving performance, handling errors effectively, and creating a smooth user experience.

---

## Key Features

* **Report Items:** Users can submit details of lost or found items, including title, description, date, location, contact information, and optional images.
* **Search and Filter:** Quickly find items using keywords or filter by status (lost or found).
* **Interactive Map:** Displays item locations visually using a map, making it easier to identify where items were reported.
* **Emergency AI Assistant:** Provides emergency contacts and helps locate nearby services using external APIs.
* **Responsive Design:** Works across desktop, tablet, and mobile devices.
* **Error Handling:** Handles API failures gracefully and provides clear feedback to users.
* **Performance Optimization:** Uses caching techniques to improve speed and reduce unnecessary API calls.

---

## 🌐 Access the Deployed Website

URL:  http://localhost:5173/

---

## 🎥 Demo Video

Watch the application in action:
https://www.canva.com/design/DAGjEGZZEtc/qrq_m5qKzdv_T5j89KdMmg/watch

---

## 🛠️ Tech Stack

**Frontend:** HTML, CSS, JavaScript
**Framework:** Vite

**APIs Used:**

* Geoapify API
* Nominatim API
* Mapbox API
* Firebase Firestore

**Libraries:**

* Leaflet

**Deployment:**

* Nginx web servers with load balancing

---

## Local Setup Instructions

# Prerequisites

* Node.js (v16 or higher)
* npm installed
* Firebase project with Firestore enabled
* API keys (Geoapify and Mapbox)

### Setup Steps

**1. Clone the Repository**

```bash
git clone https://github.com/your-username/my-investigation-swift.git
cd my-investigation-swift
```

**2. Install Dependencies**

```bash
npm install
```

**3. Configure Environment Variables**
Create a `.env` file and add:

```env
VITE_GEOAPIFY_API_KEY=your-key
VITE_MAPBOX_API_KEY=your-key
VITE_FIREBASE_API_KEY=your-key
VITE_FIREBASE_AUTH_DOMAIN=your-domain
VITE_FIREBASE_PROJECT_ID=your-id
VITE_FIREBASE_STORAGE_BUCKET=your-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-id
VITE_FIREBASE_APP_ID=your-id
VITE_FIREBASE_MEASUREMENT_ID=your-id
```

⚠️ Keep your `.env` file private.

---
**4. Run the App**

```bash
npm run dev
```

---

**5. Build for Production**

```bash
npx vite build
npx vite preview
```

---

## 🌐 Deployment Overview

The application is deployed across multiple servers with load balancing to ensure availability and performance.

📄 Deployment Steps
1. Application Deployment
Installed Node.js and Nginx on both web servers
Cloned the repository from GitHub
Installed dependencies using npm install
Built the application using npm run build
Deployed static files from dist/ to /var/www/html/

3. Web Server Configuration
Configured Nginx to serve static files
Enabled SPA routing using try_files
Restarted Nginx to apply changes

5. Load Balancer Setup
Installed HAProxy on the load balancer server
Configured frontend to listen on port 80
Configured backend with Web01 and Web02 servers
Used roundrobin load balancing algorithm

7. Testing
Verified application access via individual web servers
Accessed application through load balancer IP
Confirmed traffic distribution between servers

---

## 📅 Note on Dates

Some records may display dates from 2025. These were generated during the initial testing phase using Firestore’s automatic timestamp system.

Since the database is externally managed, these original timestamps could not be modified. To maintain consistency, the application adjusts how dates are displayed so that users see the current date.

---

## API and Resource Attribution

* Geoapify API
* Nominatim API
* Mapbox API
* Firebase Firestore
* Leaflet
* OpenStreetMap
* Vite

---

## 📝 License

This project is licensed under the MIT License.

---

## 👤 About the Creator

I am Nyayath Lual Deng, a software engineering student from South Sudan with a strong interest in building solutions that solve real-world problems.My focus is on using technology to create impact in areas such as healthcare, education, and community development.

---

© 2026 My Investigation Swift — Nyayath Lual Deng
