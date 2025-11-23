<div align="center">
  <h1>
    <bold>MockAI</bold><br>
    <strong>AI-Powered Voice Interview Platform</strong>
  </h1>
</div>

MockAI is a modern web application that leverages cutting-edge AI technology to provide realistic job interview practice sessions. Built with Next.js and powered by Vapi's voice AI agents with GPT-4o, it offers an immersive interview experience with real-time conversational intelligence.

### ✨ Key Features

-  Real-Time Voice Interviews - Natural conversation flow with AI voice agents powered by Vapi
-  AI-Generated Questions - Dynamic interview questions tailored to your role, experience level, and tech stack
-  Multiple Interview Types - Support for technical, behavioral, and mixed interview formats
-  Follow-Up Questions - AI agent takes follow-up questions based on the user response
-  Real-Time Transcription - Live conversation tracking with transcript display
-  Intelligent Feedback - Comprehensive Feedback summary with areas of improvement
-  Try Yourself: https://agentic-ai-interviewer-mauve.vercel.app/

### 🏗️ Tech Stack

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next.js_15-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Vapi_AI-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
  </div>

</div>

### Frontend
- **Next.js 15** - React framework with App Router and Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom design system

### Backend & Services
- **Firebase Admin SDK** - Firestore database for session id's (later can be used for authentication)
- **Vapi AI** - Voice agent integration powered by OpenAI GPT-4o
- **Zod** - Runtime type validation

### Key Libraries
- `@vapi-ai/web` - Vapi voice agent SDK
- `firebase-admin` - Firebase backend operations
- `clsx` + `tailwind-merge` - Dynamic styling utilities

---

### 🛠️ Architecture (High-Level Design)
<div align="center"><img width="754" height="800" alt="Screenshot 2025-11-23 at 17 21 26" src="https://github.com/user-attachments/assets/47827075-15bb-46f5-a9b8-015b74977858" /></div>

### 🛠️ VAPI AI Worflow
<div align="center"><img width="879" height="809" alt="Screenshot 2025-11-23 at 17 23 56" src="https://github.com/user-attachments/assets/8115ea76-b70b-431c-910b-60ed87dbbf27" /></div>

---

## 🎯 Usage

### Interview Flow
1. **Start Session** - User initiates interview with custom parameters (role, level, tech stack) asked by the AI agent
2. **AI Conversation** - Natural voice interaction is conducted by Vapi AI agent
3. **Real-Time Transcription** - Live conversation tracking and display using transcriber
4. **End Interview** - Session completion with automatic feedback and areas of improvement

### AI Integration
- **Vapi Voice Agents** - Powered by OpenAI GPT-4o for natural language conversations
- **Firebase** - Stores interview sessions and user data to generate feedback later on

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
git clone https://github.com/Rishivarshney100/Agentic_AI_Interviewer.git
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
│   ├── Agent.tsx         # Voice agent Workflow Usage
│   └── DisplayTechIcons.tsx  # Icon Utility
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
    └── tech.svg          # fallback icon
```
---

## 🔧 Configuration

### Vapi AI Setup (similar to N8N)
1. Sign up at [Vapi AI](https://vapi.ai)
2. Create a workflow for interview conversations
3. Add workflow to a AI agent 
4. Add your workflow ID and web token to `.env.local`

### Firebase Setup
1. Create a project at [Firebase Console](https://console.firebase.google.com)
2. Enable Firestore and create a database
3. Download service account credentials
4. Add configuration to `.env.local`

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
