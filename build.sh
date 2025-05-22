# A script to build the frontend and backend for a Django and Vite application
#!/bin/bash

set -e errexit

#  Setup frontend
cd frontend

# Remove the dist directory if it exists
if [ -d "dist" ]; then
    rm -rf dist
    echo "Removed existing dist directory."
fi
# Build the frontend
bun run build

cd ../backend

# Make migrations
python manage.py makemigrations
# Migrate the database  
python manage.py migrate
# Collect static files
python manage.py collectstatic --noinput

echo "Frontend and backend build complete. You can now run the server using the 'start.sh' script."
