# 🚚 Logistics Management & Route Optimization Dashboard

A full-stack web application for **managing shipments, vehicles, and route allocation**, featuring **map-based visualization**, **manual & automatic assignment**, and a **containerized production-ready setup**.

---

## 📌 Project Summary

This project provides a **management console** to:

- Create and manage **shipments**
- Create and manage **vehicles**
- Allocate shipments to vehicles
- Perform **manual assignment** when automation is insufficient
- Visualize optimized routes on an **interactive map**
- Communicate with a backend API for persistence
- Run seamlessly using **Docker and Nginx**

The frontend is built using **React + TypeScript + Vite**, styled with **Tailwind CSS**, and served via **Nginx** in production.

---

## 🧱 Tech Stack

### Frontend
- React (TypeScript)
- Vite
- Tailwind CSS
- Leaflet (Map rendering & routing)
- Axios (API communication)

### Backend
- REST API (service-based backend)
- PostgreSQL database

### DevOps
- Docker
- Docker Compose
- Nginx (production server)

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── AllocationButton.tsx      # Trigger shipment allocation
│   ├── ManagementConsole.tsx     # Main admin dashboard
│   ├── ManualAssignModal.tsx     # Manual shipment → vehicle assignment
│   ├── MapView.tsx               # Leaflet-based map & routes
│   ├── RouteGuard.tsx            # Protected routes
│   ├── ShipmentForm.tsx          # Shipment creation form
│   ├── VehicleForm.tsx           # Vehicle creation form
│   ├── VehicleSelector.tsx       # Vehicle selection UI
│   └── Toast.tsx                 # Global notifications
│
├── services/
│   └── api.ts                    # Centralized API handler
│
├── types/
│   └── leaflet-routing-machine.d.ts
│
├── App.tsx                       # App routing and layout
├── main.tsx                      # React entry point
├── index.css                     # Global styles
└── vite-env.d.ts


┌──────────────────────────┐
│        User Browser       │
│  (React + TypeScript UI)  │
└─────────────┬────────────┘
              │ HTTP Requests
              ▼
┌──────────────────────────┐
│        Nginx Server       │
│  (Serves Production UI)  │
└─────────────┬────────────┘
              │ API Calls
              ▼
┌──────────────────────────┐
│       Backend API         │
│   (Business Logic)       │
└─────────────┬────────────┘
              │ SQL Queries
              ▼
┌──────────────────────────┐
│       PostgreSQL DB       │
│  (Shipments, Vehicles)   │
└──────────────────────────┘


⚙️ Key Features

📍 Interactive map with route visualization

🚛 Vehicle and shipment management

🔄 Manual and automated allocation

🔐 Route protection and guarded views

🔔 Toast-based notifications

🐳 Dockerized build and deployment

🚀 Nginx-based production serving

🐳 Docker Setup
Build and Run
docker-compose up --build

Stop Services
docker-compose down

Clean Docker Environment (optional)
docker system prune -f

📦 Production Build Flow

Vite builds optimized static assets

Assets are copied into the Nginx container

Nginx serves the frontend on port 80

API requests are forwarded to the backend service

🔒 Configuration Notes

API base URL configured in services/api.ts

Nginx configuration defined in nginx.conf

Docker build instructions defined in Dockerfile

📈 Future Enhancements

Authentication & role-based access control

Automated route optimization algorithms

Real-time vehicle tracking

CI/CD pipeline integration

Performance optimizations for large datasets


github link to the backend repo-- https://github.com/MithranHarsha/hh_backend.git
