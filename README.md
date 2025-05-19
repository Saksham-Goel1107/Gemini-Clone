# Gemini AI Chat Application

<div align="center">
  <img src="./public/assets/gemini-logo.svg" alt="Gemini Logo" width="200"/>
  <h3>A modern AI chat application powered by Google's Gemini AI</h3>
</div>

<div align="center">
  
  [![Next.js](https://img.shields.io/badge/Next.js-14.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![Google Generative AI](https://img.shields.io/badge/Gemini_AI-0.14.1-4285F4?style=flat-square&logo=google)](https://ai.google.dev/docs/gemini_api)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
  [![GitHub last commit](https://img.shields.io/github/last-commit/Saksham-Goel1107/Gemini?style=flat-square)](https://github.com/Saksham-Goel1107/Gemini-clone/commits/main)

</div>

## 🌟 Features

- **Google AI Integration**: Powered by the Google Generative AI API (Gemini)
- **Chat History**: Save and revisit your conversation history
- **Authentication**: Secure login with Google OAuth
- **Responsive Design**: Works on both mobile and desktop
- **Dark/Light Theme**: Choose your preferred theme
- **Code Highlighting**: Beautiful syntax highlighting for code snippets
- **Speech to Text**: Convert your voice to text input
- **Text to Speech**: Listen to AI responses
- **Optimistic UI**: Instant feedback with optimistic updates
- **Share Conversations**: Easily share your AI conversations
- **Prompt Gallery**: Collection of useful pre-made prompts


## 🚀 Tech Stack

- **Frontend**:
  - Next.js 14 (App Router)
  - TypeScript
  - TailwindCSS
  - Framer Motion
  - Zustand (State Management)
  - React Markdown
  - TipTap (Rich Text Editor)

- **Backend**:
  - NextAuth.js (Authentication)
  - MongoDB & Mongoose
  - Google Generative AI SDK

- **Deployment**:
  - Vercel (recommended)

## 📂 Project Structure

```
Gemini/
├── public/                  # Static assets
│   └── assets/              # Images and icons
├── src/
│   ├── actions/             # Server actions
│   ├── app/                 # App router pages
│   │   ├── (routes)/        # Application routes
│   │   │   └── (general)/   # General routes
│   │   │       ├── app/     # Main application
│   │   │       │   └── [chat]/ # Individual chat routes
│   │   │       └── prompt-gallery/ # Prompt gallery page
│   │   └── api/             # API routes
│   ├── components/          # React components
│   │   ├── chat-provider-components/ # Chat functionality
│   │   ├── dev-components/  # UI components
│   │   ├── header-components/ # Header components
│   │   ├── input-prompt-components/ # Input components
│   │   ├── prompt-gallery-components/ # Gallery components
│   │   ├── sidebar-components/ # Sidebar UI
│   │   └── temp-components/ # Temporary components
│   ├── models/              # MongoDB models
│   ├── types/               # TypeScript types
│   └── utils/               # Utility functions
└── middleware.ts            # NextAuth middleware
```

## 🛠️ Setup and Installation

### Prerequisites

- Node.js 18+ 
- MongoDB database
- Google OAuth credentials
- Google Gemini API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Saksham-Goel1107/Gemini-clone.git
   cd Gemini-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file based on `.env.sample`
   - Fill in your credentials

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## ⚙️ Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Google OAuth credentials
GOOGLE_ID=your_google_id_here
GOOGLE_SECRET=your_google_secret_here

# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017

# NextAuth secret
NEXTAUTH_SECRET=your_nextauth_secret_here

# Base URL for the application
BASE_URL=http://localhost:3000

# Google API Key
NEXT_PUBLIC_API_KEY=your_google_api_key_here
```

## 📝 Usage

1. Login with your Google account
2. Start a new conversation in the main app
3. Type your prompt in the input field
4. Explore the prompt gallery for inspiration
5. View and manage your chat history in the sidebar
6. Toggle between light and dark themes
7. Share interesting conversations

## 🔗 API Integration

This project uses the Google Generative AI API (Gemini). You need to obtain an API key from the [Google AI Studio](https://ai.google.dev/) to use this application.

## 🧪 Testing

```bash
npm run test
# or
yarn test
# or
pnpm test
```

## 🚀 Deployment

This application can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FSaksham-Goel1107%2FGemini)

Don't forget to add the environment variables to your Vercel project.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Saksham Goel**

- GitHub: [@Saksham-Goel1107](https://github.com/Saksham-Goel1107)

## 🙏 Acknowledgements

- [Google Gemini AI](https://ai.google.dev/) for providing the AI capabilities
- [Next.js](https://nextjs.org/) for the application framework
- [TailwindCSS](https://tailwindcss.com/) for the styling
- [NextAuth.js](https://next-auth.js.org/) for authentication
- [MongoDB](https://www.mongodb.com/) for database services
- All the open-source packages that made this project possible