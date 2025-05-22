#  A script to start the django and vite dev servers
#!/bin/bash

set -e

# Initialize shutdown flag
SHUTDOWN_CALLED=0

# Start Django
cd backend
python manage.py runserver &
cd ..

# Start Vite
cd frontend
bun run dev &
cd ..

# Shutdown function
shutdown() {
  if [ "$SHUTDOWN_CALLED" -eq 0 ]; then
    SHUTDOWN_CALLED=1
    echo "Shutting down..."
    pkill -f "python manage.py runserver" 2>/dev/null || true
    pkill -f "bun run dev" 2>/dev/null || true
    echo "All processes terminated."
  fi
}

# Trap signals
trap "shutdown" SIGINT SIGTERM EXIT

# Wait for startup
sleep 5

# Check if Django is running
curl -s http://localhost:8000 >/dev/null || { echo "Django failed!"; shutdown; exit 1; }

# Check if Vite is running
curl -s http://localhost:5173 >/dev/null || { echo "Vite failed!"; shutdown; exit 1; }

echo "Servers started. Waiting..."
wait

