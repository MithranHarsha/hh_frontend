🚚 Logistics Management & Route Optimization Dashboard

A full-stack web application for managing shipments, vehicles, and route allocation, featuring map-based visualization, manual & automatic assignment, and a containerized production-ready setup.

📌 Project Summary

This project provides a management console to:

Create and manage shipments and vehicles

Allocate shipments to vehicles

Visualize routes on an interactive map

Perform manual assignment when automation is insufficient

Communicate with a backend API for data persistence

Run seamlessly using Docker + Nginx

The frontend is built with React + TypeScript + Vite, styled using Tailwind CSS, and served via Nginx in production.

🧱 Tech Stack
Frontend

React (TypeScript)

Vite

Tailwind CSS

Leaflet (Map visualization)

Axios (API communication)

Backend (External / Service-based)

REST API (Python backend assumed)

PostgreSQL (via Docker)

DevOps

Docker

Docker Compose

Nginx (Production build serving)

📂 Project Structure
src/
├── components/
│   ├── AllocationButton.tsx      # Trigger shipment allocation
│   ├── ManagementConsole.tsx     # Main admin dashboard
│   ├── ManualAssignModal.tsx     # Manual shipment → vehicle assignment
│   ├── MapView.tsx               # Leaflet-based map & routes
│   ├── RouteGuard.tsx            # Protected routing
│   ├── ShipmentForm.tsx          # Shipment creation form
│   ├── VehicleForm.tsx           # Vehicle creation form
│   ├── VehicleSelector.tsx       # Vehicle selection UI
│   └── Toast.tsx                 # Global notifications
│
├── services/
│   └── api.ts                    # Centralized API calls
│
├── types/
│   └── leaflet-routing-machine.d.ts
│
├── App.tsx                       # App routing & layout
├── main.tsx                      # React entry point
├── index.css                     # Global styles
└── vite-env.d.ts

🏗️ Architecture Diagram
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

📍 Interactive Map View with routing

🚛 Vehicle & Shipment Management

🔄 Manual & Automated Allocation

🔐 Route Protection

🔔 Toast Notifications

🐳 Dockerized Build & Deployment

🚀 Nginx Production Serving

🐳 Docker Setup
Build & Run
docker-compose up --build

Stop Services
docker-compose down

Clean Build (optional)
docker system prune -f

📦 Production Build Flow

Vite builds static assets

Assets are copied into Nginx container

Nginx serves the app on port 80

API calls are proxied to backend service

🔒 Environment & Configuration

API base URL configured in services/api.ts

Nginx configuration in nginx.conf

Docker instructions in Dockerfile

📈 Future Improvements

Authentication & Role-Based Access

Automated route optimization algorithms

Real-time vehicle tracking

CI/CD pipeline integration

Map performance optimizations
