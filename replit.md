# Akshita Jain Portfolio - replit.md

## Overview

This is a modern, visually stunning personal portfolio website built as a React application using Vite. The project showcases Akshita Jain's skills, projects, and achievements through an interactive single-page application with smooth animations and a contemporary design aesthetic.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives via shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state (future API integration)

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL session store
- **Development**: Hot module replacement with Vite integration

### Design System
- **Theme**: Dark mode with neon color palette (blue, purple, pink)
- **Typography**: Inter, Poppins, and Outfit fonts
- **Components**: Glassmorphism effects with custom CSS classes
- **Responsive**: Mobile-first design with Tailwind breakpoints

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated landing with professional photo placeholder and gradient effects
2. **About Section**: Education background and personal summary with interactive cards
3. **Skills Section**: Technical skills displayed with animated progress bars
4. **Projects Section**: Featured projects with modal popups and detailed descriptions
5. **Certifications Section**: Professional certifications with expandable details
6. **Achievements Section**: Timeline of accomplishments and experiences
7. **Contact Section**: Contact form and social media links

### Interactive Features
- **Navigation**: Smooth scrolling navigation with glassmorphism effects
- **Project Modals**: Detailed project views with screenshots and technology tags
- **Certification Modals**: Expandable certification details with learning areas
- **Responsive Design**: Mobile-friendly with collapsible navigation

### Key Projects Highlighted
- **Focusmate**: Productivity platform with task management and Pomodoro timer
- **Detectify**: Deepfake detection tool (Smart India Hackathon 2024)
- **Portfolio Website**: Self-referential React portfolio
- **Additional Projects**: Scrap selling website, Tic Tac Toe game, drone tasks

## Data Flow

The application follows a component-based architecture with:
- **Props**: Data passed down from parent to child components
- **State**: Local component state for UI interactions (modals, forms)
- **Context**: Potential for global state management (not currently implemented)
- **Future API Integration**: TanStack Query setup for server communication

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React, React Icons
- **Date Handling**: date-fns

### Development Dependencies
- **Build Tools**: Vite, esbuild
- **TypeScript**: Type checking and development experience
- **Database**: Drizzle ORM, PostgreSQL adapter
- **Linting/Formatting**: ESLint, Prettier (implied by setup)

### Database Schema
Currently includes a basic user schema with:
- Users table with username/password fields
- Drizzle ORM configuration for PostgreSQL
- Migration support through drizzle-kit

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with HMR
- **Database**: PostgreSQL with Drizzle migrations
- **Environment**: Node.js with ES modules

### Production Build
- **Frontend**: Vite build with optimized bundles
- **Backend**: esbuild compilation for Node.js
- **Assets**: Static file serving through Express
- **Database**: PostgreSQL with connection pooling

### Replit Integration
- **Runtime Error Overlay**: Development error handling
- **Cartographer Plugin**: Replit-specific tooling
- **Dev Banner**: Replit branding for external access

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
```

## User Preferences

Preferred communication style: Simple, everyday language.