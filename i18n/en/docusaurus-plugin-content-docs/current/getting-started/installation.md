---
id: installation
title: installation
---

# 🚀 Installation Guide

Welcome to the GooseLang-Dev installation guide! This comprehensive guide will walk you through setting up your development environment step by step.

## 📋 Prerequisites

Before installing GooseLang-Dev, ensure you have the following prerequisites installed on your system:

- **Operating System**: Linux (Ubuntu/Debian recommended), macOS, or Windows with WSL2
- **Package Manager**: `apt` (Ubuntu/Debian) or equivalent for your system
- **Network Access**: Stable internet connection for downloading dependencies
- **Disk Space**: At least 2GB of free space for the complete installation

## 🔄 System Updates

First, let's ensure your system is up to date with the latest packages and security patches:

```bash
# Update package lists
sudo apt-get update

# Upgrade existing packages to their latest versions
sudo apt-get upgrade -y
```

> **💡 Tip**: Running these commands regularly helps prevent compatibility issues and security vulnerabilities.

## 📦 Install Node.js and npm

Node.js and npm are essential for running the GooseLang-Dev application. We'll install them using the package manager:

```bash
# Install Node.js and npm together
sudo apt-get install nodejs npm -y

# Verify the installation
node --version
npm --version
```

> **🔍 Verification**: You should see version numbers displayed for both Node.js and npm. If you see "command not found", the installation may have failed.

## 🗄️ Install MongoDB

MongoDB serves as the database backend for GooseLang-Dev. Follow the official MongoDB installation guide:

**📖 Official Guide**: https://www.mongodb.com/docs/manual/administration/install-community/

### Quick MongoDB Installation (Ubuntu/Debian):

```bash
# Import MongoDB public GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Update package database
sudo apt-get update

# Install MongoDB
sudo apt-get install -y mongodb-org

# Start MongoDB service
sudo systemctl start mongod

# Enable MongoDB to start on boot
sudo systemctl enable mongod

# Verify MongoDB is running
sudo systemctl status mongod
```

> **⚠️ Note**: Replace `jammy` with your Ubuntu version if different (e.g., `focal` for Ubuntu 20.04).

## 🛠️ Project Setup

Now let's set up the GooseLang-Dev project itself:

### Step 1: Navigate to the Project Directory

```bash
# Change to the GooseLang-Dev directory
cd /GooseLang-Dev

# Verify you're in the correct directory
pwd
ls -la
```

### Step 2: Install Dependencies

```bash
# Install all project dependencies using yarn
yarn install

# Or if you prefer npm
npm install
```

> **⏱️ Time**: This step may take several minutes depending on your internet speed and system performance.

### Step 3: Install Default UI Addon (Optional)

This addon provides the default user interface for frontend development:

```bash
# Install the default UI addon
yarn gooselang addon add @gooselang/ui-default

# Verify the installation
yarn gooselang addon list
```

> **🎨 Frontend Development**: Install this addon if you plan to work on the user interface or need the complete development environment.


## 🚀 Running the Application

### Starting the Backend Server

The backend provides the API and core functionality:

```bash
# Start the backend in debug mode with file watching
yarn debug --port=2333 --watch

# Alternative: Start in production mode
yarn start --port=2333
```

> **🔍 Debug Mode**: The `--watch` flag enables automatic restart when files change, perfect for development.

### Starting the Frontend Development Server

> **📋 Prerequisite**: Ensure the default UI addon is installed (see Step 3 above).

```bash
# Start the frontend development server
yarn build:ui:dev

# Or for production build
yarn build:ui
```

> **🌐 Access**: Once started, you can typically access the application at `http://localhost:3000` (frontend) and `http://localhost:2333` (backend API).

## ⚙️ Post-Installation Steps

### Setting Up Super Admin User

After registering a user through the application, you can promote them to super admin status:

```bash
# Make user with ID 2 a super admin
yarn gooselang cli user setSuperAdmin 2

# Verify the change
yarn gooselang cli user list
```

> **🔑 Super Admin**: Super admins have full access to all features and can manage other users.

## 🔧 Troubleshooting

### Common Issues and Solutions

If you encounter errors when running the backend for the first time, try the following solutions:

#### Issue 1: Line Ending Problems (Windows/WSL)

```bash
# Install dos2unix utility
sudo apt-get install dos2unix

# Convert line endings in the gooselang script
dos2unix /GooseLang-Dev/packages/gooselang/bin/gooselang.js

# Try running the backend again
yarn debug --port=2333 --watch
```

#### Issue 2: Permission Denied

```bash
# Make the script executable
chmod +x /GooseLang-Dev/packages/gooselang/bin/gooselang.js

# Try running again
yarn debug --port=2333 --watch
```

#### Issue 3: Port Already in Use

```bash
# Check what's using the port
sudo lsof -i :2333

# Kill the process if needed
sudo kill -9 <PID>

# Or use a different port
yarn debug --port=2334 --watch
```

#### Issue 4: MongoDB Connection Issues

```bash
# Check if MongoDB is running
sudo systemctl status mongod

# Start MongoDB if it's not running
sudo systemctl start mongod

# Check MongoDB logs
sudo journalctl -u mongod -f
```

> **📞 Support**: If you continue to experience issues, please check the project's GitHub issues page or documentation for additional troubleshooting steps.

## ✅ Verification Checklist

After installation, verify everything is working:

- [ ] System packages are updated
- [ ] Node.js and npm are installed and working
- [ ] MongoDB is running and accessible
- [ ] Project dependencies are installed
- [ ] Backend server starts without errors
- [ ] Frontend development server starts without errors
- [ ] You can access the application in your browser
- [ ] Super admin user is configured (if needed)

---

**🎉 Congratulations!** You've successfully installed and configured GooseLang-Dev. You're now ready to start developing!

