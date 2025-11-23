<div align="center">
  <h1>
    <bold>MockAI</bold><br>
    <strong>AI-Powered Voice Interview Platform</strong>
  </h1>
</div>

MockAI is a modern web application that leverages cutting-edge AI technology to provide realistic job interview practice sessions. Built with Next.js and powered by Vapi's AI agents, it offers an immersive interview experience with intelligent feedback powered by Google Gemini.

### ✨ Key Features

-  Real-Time Voice Interviews - Natural conversation flow with AI voice agents powered by Vapi
-  AI-Generated Questions - Dynamic interview questions tailored to your role, experience level, and tech stack
-  Multiple Interview Types - Support for technical, behavioral, and mixed interview formats
-  Follow-Up Questions - AI agent takes follow-up questions based on the user response
-  Real-Time Transcription - Live conversation tracking with transcript display
-  Intelligent Feedback - Comprehensive Feedback summary with areas of improvement

### 🏗️ Tech Stack

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next.js_15-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Vapi_AI-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
    <img src="https://img.shields.io/badge/-Google_Gemini-black?style=for-the-badge&logoColor=white&logo=google&color=4285F4" alt="gemini" />
  </div>

</div>

### Frontend
- **Next.js 15** - React framework with App Router and Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom design system

### Backend & Services
- **Firebase Admin SDK** - Firestore database for session id's (later can be used for authentication)
- **Vapi AI** - Voice agent integration for natural conversations
- **Google Gemini** - AI-powered interview question generation and feedback analysis
- **Zod** - Runtime type validation

### Key Libraries
- `@ai-sdk/google` - Google AI SDK integration
- `vapi-sdk` - Vapi voice agent SDK
- `firebase-admin` - Firebase backend operations
- `clsx` + `tailwind-merge` - Dynamic styling utilities

---

### 🛠️ Architecture and Worflows

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ai_mock_interviews.git
cd ai_mock_interviews
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:

```env
# Vapi AI Configuration
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id

# Google Gemini API
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key

# Application
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Firebase Admin SDK
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY=your_firebase_private_key
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
ai_mock_interviews/
├── app/                    # Next.js App Router
│   ├── interview/         # Interview pages
│   │   └── [id]/         # Dynamic interview session
│   ├── layout.tsx        # Root layout with navigation
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles and design system
├── components/            # React components
│   ├── Agent.tsx         # Voice agent interface
│   └── DisplayTechIcons.tsx  # Technology badges
├── lib/                   # Utilities and actions
│   ├── actions/          # Server actions
│   │   └── general.action.ts  # Interview & feedback logic
│   ├── utils.ts          # Helper functions
│   └── vapi.sdk.ts       # Vapi SDK initialization
├── constants/            # Application constants
│   └── index.ts          # Interview configs and mappings
├── firebase/             # Firebase configuration
│   └── admin.ts          # Firebase Admin SDK setup
├── types/                # TypeScript definitions
│   ├── index.d.ts       # Global types
│   └── vapi.d.ts        # Vapi-specific types
└── public/               # Static assets
    ├── covers/           # Interview cover images
    ├── logo.svg          # Application logo
    └── tech.svg          # Technology fallback icon
```

---

## 🎯 Core Features Explained

### Interview Flow
1. **Start Session** - User initiates interview with custom parameters (role, level, tech stack)
2. **AI Conversation** - Natural voice interaction with Vapi AI agent
3. **Real-Time Transcription** - Live conversation tracking and display
4. **End Interview** - Session completion with automatic feedback and areas of improvement

### AI Integration
- **Vapi Voice Agents** - Handle natural language conversations
- **Google Gemini** - Generates contextual interview questions and analyzes responses
- **Firebase** - Stores interview sessions and user data

### Evaluation System
Candidates are scored across five key areas:
- 🗣️ **Communication Skills** - Clarity and articulation
- 💻 **Technical Knowledge** - Understanding of concepts
- 🧩 **Problem-Solving** - Analytical thinking
- 🤝 **Cultural Fit** - Alignment with role expectations
- 💪 **Confidence & Clarity** - Response quality

---

## 🎨 Design System

The application features a custom design system with:
- **Dark Theme** - Modern dark mode UI
- **Custom Color Palette** - Primary, success, destructive, and light variants
- **Gradient Utilities** - Beautiful gradient backgrounds
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Fade-in effects and transitions

---

## 🔧 Configuration

### Vapi AI Setup
1. Sign up at [Vapi AI](https://vapi.ai)
2. Create a workflow for interview conversations
3. Add your workflow ID and web token to `.env.local`

### Firebase Setup
1. Create a project at [Firebase Console](https://console.firebase.google.com)
2. Enable Firestore and Authentication
3. Download service account credentials
4. Add configuration to `.env.local`

### Google Gemini Setup
1. Get API key from [Google AI Studio](https://aistudio.google.com)
2. Add to `.env.local`

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
