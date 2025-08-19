
# Kana Compass: Your Guide to Mastering Japanese Kana

<p align="center">
  <img src="https://placehold.co/600x300.png" alt="Kana Compass Banner" data-ai-hint="japanese learning" />
</p>

Welcome to Kana Compass! This isn't just another flashcard app; it's an interactive learning experience designed to guide you through the first crucial steps of learning Japanese: mastering Hiragana and Katakana. Built with a modern tech stack and a sprinkle of AI magic, Kana Compass makes learning intuitive, engaging, and effective.

## What is Kana Compass?

Kana Compass is a web application created to help beginners learn the two fundamental Japanese syllabaries:

*   **ひらがな (Hiragana):** The basic phonetic script, used for native Japanese words and grammatical elements.
*   **カタカナ (Katakana):** Used for foreign loanwords, onomatopoeia, and for emphasis.

The app breaks down the 92 characters into manageable, themed lessons. You'll learn each character's pronunciation, see how it's used in real words, and solidify your knowledge with quizzes before advancing.

## Features

*   **Interactive Lessons:** Progress through structured lessons for both Hiragana and Katakana, from vowels to more complex characters.
*   **Engaging Mnemonics:** Each character comes with a memorable mnemonic to help it stick in your mind.
*   **Practical Examples:** See and hear each kana used in a common Japanese word.
*   **Gamified Quizzes:** Test your knowledge at the end of each lesson. You'll need to pass a quiz to unlock the next set of characters!
*   **Progress Tracking:** The app remembers which characters you've learned and which lessons you've completed, allowing you to pick up right where you left off.
*   **AI Sentence Builder:** This is where it gets fun! Use the kana you've mastered to generate simple, custom example sentences with the help of Google's Gemini model, powered by Genkit.

## Tech Stack

This project is built with a modern, robust, and scalable technology stack, perfect for a production-ready application.

*   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [React](https://reactjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library:** [ShadCN UI](https://ui.shadcn.com/)
*   **AI/Generative:** [Genkit](https://firebase.google.com/docs/genkit) (with Google Gemini)
*   **State Management:** React Hooks & Context API for client-side state.

## Getting Started

Ready to run the project locally? Here’s how you can get set up.

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or your favorite package manager

### 1. Clone the Repository

First, clone the project to your local machine.

```bash
git clone <your-repository-url>
cd kana-compass
```

### 2. Install Dependencies

Install all the necessary packages using npm.

```bash
npm install
```

### 3. Set Up Environment Variables

The AI Sentence Builder uses the Google Gemini API. You'll need an API key to make it work.

1.  Create a new file named `.env` in the root of your project.
2.  Obtain an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
3.  Add your key to the `.env` file:

```env
GEMINI_API_KEY=your_google_api_key_here
```

### 4. Run the Development Server

Now you're ready to start the app!

```bash
npm run dev
```

The application should now be running at `http://localhost:9002`.

## Project Structure

Here's a quick overview of the key directories in the project:

```
src
├── ai/
│   ├── flows/          # Genkit flows for AI features
│   └── genkit.ts       # Genkit configuration
├── app/
│   ├── (routes)/       # Next.js App Router pages
│   ├── actions.ts      # Server Actions
│   ├── globals.css     # Global styles and Tailwind directives
│   └── layout.tsx      # Root layout
├── components/
│   ├── ui/             # ShadCN UI components
│   ├── layout/         # Layout components like the App Shell
│   └── *.tsx           # App-specific, reusable components
├── data/
│   └── kana.ts         # Contains all Hiragana and Katakana lesson data
├── hooks/
│   ├── useProgress.ts  # Custom hook to manage user's learning progress via localStorage
│   └── useToast.ts     # Custom hook for displaying notifications
└── lib/
    └── utils.ts        # Utility functions (e.g., cn for classnames)
```

## How It Works

### The Learning Loop

The core learning experience is managed by the `useProgress` hook (`src/hooks/use-progress.ts`). This hook uses the browser's `localStorage` to keep track of:
1.  **Learned Kana:** A set of individual kana characters the user has successfully been quizzed on.
2.  **Completed Lessons:** A set of lesson slugs that the user has passed.

A lesson is considered "unlocked" if its slug is in the `completedLessons` set. When a user completes a quiz, the current lesson is marked as complete, and the *next* lesson is automatically unlocked, creating a clear path for progression.

### AI-Powered Sentences

The **AI Sentence Builder** is powered by a Genkit flow defined in `src/ai/flows/generate-example-sentences.ts`.

1.  The user selects kana they have learned in the `SentenceBuilder` component (`src/components/sentence-builder.tsx`).
2.  When they click "Generate", a Next.js Server Action (`src/app/actions.ts`) is called.
3.  This action invokes the `generateExampleSentences` flow, passing the array of selected kana.
4.  The Genkit flow uses a typed prompt with a Zod schema to instruct the Gemini model to create simple, beginner-friendly sentences using *only* the provided characters.
5.  The generated sentences are returned to the client and displayed to the user, providing a contextual way to practice what they've learned.

---

Happy coding, and enjoy your journey into the world of Japanese!
