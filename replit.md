# Animated Portfolio Website

## Overview

This is a personal portfolio website built with React.js and Tailwind CSS. The application showcases professional information including skills, projects, work experience, education, and contact information. It features a modern, responsive design with smooth animations and interactive elements like parallax tilt effects and typing animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with Vite as the build tool and dev server
- **Styling**: Tailwind CSS with custom configuration for animations (blob keyframes) and gradients
- **Routing**: React Router DOM for navigation between sections
- **Component Structure**: Modular React components organized by feature/section (About, Skills, Projects, Contact, etc.)

### Key Design Patterns
- **Constants File**: Centralized data management through `src/constants.js` which stores all content data (skills, experience, education, projects) with associated logos and images
- **Asset Organization**: Logos and images organized by category in `src/assets/` subdirectories (tech_logo, company_logo, education_logo, work_logo)
- **Custom Utilities**: Tailwind extended with custom clip-path utilities for unique section shapes

### Animation & Interactivity
- **react-parallax-tilt**: 3D tilt effects on interactive elements
- **react-typing-effect**: Typewriter-style text animations
- **Custom CSS Animations**: Blob animations defined in Tailwind config for background effects

### Build Configuration
- **Vite**: Configured for development on port 5000 with external host access enabled
- **ESLint**: React-specific linting with hooks and refresh plugins
- **PostCSS**: Autoprefixer and Tailwind processing

## External Dependencies

### Third-Party Services
- **EmailJS** (`@emailjs/browser`): Client-side email sending for the contact form - requires EmailJS account credentials to be configured

### UI Libraries
- **react-icons**: Icon library for consistent iconography
- **react-toastify**: Toast notifications for user feedback (likely used in contact form)

### Deployment
- **Vercel**: Primary deployment platform as indicated in README

### Development Tools
- **Vite**: Development server and production bundler
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code quality and style enforcement