#!/bin/bash

set -e errexit

#  Setup frontend
cd frontend

# Install dependencies with bun
bun i
# Build the project
# This will create a dist directory with the production build of the frontend
# This is necessary for the backend to serve the production frontend
# The dist directory must be created before running the backend
# The backend will look for the dist directory in the frontend directory
bun run build

cd ..
# Setup backend
cd backend
# Install dependencies
uv sync
# Run database migrations
python manage.py makemigrations

python manage.py migrate
# Create a superuser
python manage.py createsuperuser
# Collect static files
python manage.py collectstatic --noinput
# Dispay message
echo "Frontend and backend setup complete. You can now run the server using './start.sh' in the root directory."