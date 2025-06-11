# Loch Landing Page

A modern, responsive landing page built with React and Tailwind CSS, featuring a dynamic sidebar, notification cards, and whale watching sections.

## Features

- Responsive design that works on both mobile and desktop
- Dynamic sidebar with email signup form
- Horizontally scrollable notification cards
- Whale watching feature section
- Testimonials section
- Modern UI with gradient backgrounds and smooth transitions

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## Project Structure

```
src/
├── components/
│   ├── NotificationSection.tsx    # Notification cards section
│   ├── TestimonialSection.tsx     # Testimonials display
│   ├── WhaleWatchingSection.tsx   # Whale watching feature
│   └── ui/                        # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── header.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── sidebar.tsx
├── constants/                     # App constants and content
├── screens/
│   └── LandingWhales/            # Main landing page
└── App.tsx                       # Root component
```

## Getting Started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system, so please
> install it beforehand if you haven't already.

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:5173/](http://localhost:5173/)

4. Build for production:

```bash
npm run build
```

## Development

- The project uses Tailwind CSS for styling
- Components are built with TypeScript for better type safety
- The layout is responsive and adapts to different screen sizes
- The sidebar behavior changes based on screen size:
  - Mobile: Appears at the top
  - Desktop: Fixed to the right side
