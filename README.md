# 3ajib - Experience Intelligence AI

AI-powered tourism experience intelligence platform built for the PwC Empowerthon hackathon (Team 5). Helps Saudi Arabian tourism destinations optimize visitor engagement, dwell time, revenue, and social media impact using AI-driven recommendations.

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, shadcn/ui, Framer Motion
- **Backend:** Supabase (auth, database, serverless functions)
- **AI Chat:** Voiceflow integration
- **i18n:** Bilingual English/Arabic with RTL support

## Getting Started

```sh
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Environment Variables

Create a `.env` file in the root with:

```
VITE_SUPABASE_PROJECT_ID="your-project-id"
VITE_SUPABASE_PUBLISHABLE_KEY="your-anon-key"
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_VOICEFLOW_PROJECT_ID="your-voiceflow-id"
```

## Features

- Interactive AI demo with destination recommendations
- ROI calculator for tourism projections
- Multiple pricing tiers (Bronze, Silver, Gold, Platinum)
- Real-time visitor analytics dashboard
- Voiceflow AI chatbot integration
- Bilingual support (English & Arabic with RTL)