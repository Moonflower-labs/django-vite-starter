<div align="center">
<h1>Django + Vite + React Starter</h1>

**Because wiring up Django and Vite shouldn't take all day.**

  <img src="https://img.shields.io/badge/Python-3.13%2B-blue" alt="Python">
  <img src="https://img.shields.io/badge/Django-5.2-green" alt="Django">
  <img src="https://img.shields.io/badge/React-19-blueviolet" alt="React">
  <img src="https://img.shields.io/badge/Vite-6-yellow" alt="Vite">
  <img src="https://img.shields.io/badge/Bash-Scripts-important" alt="Bash">
</div>

---

## Motivation

I built this starter because even though Vite's backend integration guide explains the basics, actually setting it up with Django and React cleanly isn’t super simple.  
I wanted something lightweight that makes development smooth without overcomplicating things.  
This template keeps it simple: full control, clear structure, no plugins needed.  
If you like building with Django and React without all the setup headaches, this is for you.

A lightweight starter template for integrating [Django](https://www.djangoproject.com/) with [Vite](https://vite.dev/) for modern frontend development. Built with [uv](https://docs.astral.sh/uv/) for dependency management and based on the [Vite Backend Integration Guide](https://vite.dev/guide/backend-integration.html), this template provides a Django backend and Vite frontend with Hot Module Replacement (HMR) in development and optimized builds for production. It includes three scripts for fast setup and management.

## Features

- Django backend for templates and APIs.
- Vite frontend with HMR for fast development.
- Single `start.sh` script to run both servers.
- Production-ready asset bundling with Vite.
- Clean process management to avoid port conflicts.

## Prerequisites

- [uv](https://docs.astral.sh/uv/) for Python dependency management.
- Python 3.13.
- Node.js 20+.
- [bun](https://bun.sh/docs): all-in-one toolkit for JavaScript and TypeScript apps.
- `lsof` and `pkill` (usually pre-installed on macOS/Linux).

## Backend

- Django
- DRF
- sqlite

## Frontend

- React SPA (Vite)
- Tailwind CSS
- Bun (as package manager)
- React Router

## Getting started

For fast setup this template includes three scripts:

|   Script   | Description                                                                              |
| :--------: | :--------------------------------------------------------------------------------------- |
| `setup.sh` | Initial dependency install/build of frontend and backend.                                |
| `build.sh` | Build frontend for production, migrate database and collect static files in the backend. |
| `start.sh` | Start both dev servers.                                                                  |

1. Clone the repo `git clone <repo-url>` && `cd django-vite-starter`

2. Run the setup script. From the project root directory run: `./setup.sh`

   This script will:

   - Change to frontend directory.
   - Install vite dependencies (using bun).
   - Build the vite app (this is needed before running the Django server, as Django is confiured to look into the `dist` directory).
   - Change to backend directory
   - Install Django dependencies (using uv).
   - makemigrations & migrate.
   - Create a superuser.
   - Collect static files.

3. Start the development servers: `./start.sh`

## Building for production

Run `./build.sh`.
