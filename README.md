# Nihongo Mori: Your Guide to Mastering Japanese Kana

<p align="center">
  <img src="/nihongo-mori-logo.png" alt="Nihongo Mori Logo" />
</p>

Welcome to Nihongo Mori! This isn't just another flashcard app; it's an interactive learning experience designed to guide you through the first crucial steps of learning Japanese: mastering Hiragana and Katakana. Built with a modern tech stack, Nihongo Mori makes learning intuitive, engaging, and effective.

## What is Nihongo Mori?

Nihongo Mori is a web application created to help beginners learn the two fundamental Japanese syllabaries:

*   **ひらがな (Hiragana):** The basic phonetic script, used for native Japanese words and grammatical elements.
*   **カタカナ (Katakana):** Used for foreign loanwords, onomatopoeia, and for emphasis.

The app breaks down all the characters, including their modified **dakuten (濁点)** and **handakuten (半濁点)** forms, into manageable, themed lessons. You'll learn each character's pronunciation, see how it's used in real words, and solidify your knowledge with quizzes before advancing.

## Features

*   **Interactive Lessons:** Progress through structured lessons for both Hiragana and Katakana. Simply click on a kana character to hear its pronunciation instantly!
*   **Integrated Dakuten/Handakuten:** Learn modified characters (like が or ぱ) alongside their base forms (か and は) for a more logical learning flow.
*   **Engaging Mnemonics:** Each character comes with a memorable mnemonic to help it stick in your mind.
*   **Practical Examples:** See and hear each kana used in a common Japanese word.
*   **Gamified Quizzes:** Test your knowledge at the end of each lesson. Quizzes feature audio hints, and you'll need to pass to unlock the next set of characters.
*   **Detailed Progress Tracking:** The app remembers which lessons you've completed and which kana you've learned. The quiz results screen shows detailed stats on your accuracy with and without using audio hints, helping you identify areas for improvement.
*   **Word Generator:** Use the kana you've mastered to generate simple, custom example words from a pre-written vocabulary list.

## Tech Stack

This project is built with a modern, robust, and scalable technology stack, perfect for a production-ready application.

*   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [React](https://reactjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library:** [ShadCN UI](https://ui.shadcn.com/)
*   **State Management:** React Hooks & Context API for client-side state.

## Getting Started

Ready to run the project locally? Here’s how you can get set up.

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or your favorite package manager

### 1. Clone the Repository

First, clone the project to your local machine.

```bash
git clone https://github.com/Haziq2602/learn-kanas.git
cd nihongo-mori
```

### 2. Install Dependencies

Install all the necessary packages using npm.

```bash
npm install
```

### 3. Run the Development Server

Now you're ready to start the app!

```bash
npm run dev
```

The application should now be running at `http://localhost:9876`.

## Project Structure

Here's a quick overview of the key directories in the project:

```
src
├── app/
│   ├── (routes)/       # Next.js App Router pages
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
3.  **Quiz Results:** A history of quiz attempts, including whether audio hints were used, to calculate performance statistics.

A lesson is considered "unlocked" if its slug is in the `completedLessons` set. When a user completes a quiz, the current lesson is marked as complete, and the *next* lesson is automatically unlocked, creating a clear path for progression.

### Local Word Generator

The **Word Generator** is a client-side tool that helps reinforce learning.

1.  The user selects kana they have learned in the `WordGenerator` component (`src/components/word-generator.tsx`).
2.  When they click "Generate", the component filters a pre-defined list of example words stored in `src/data/kana.ts`.
3.  It finds all words that can be constructed using *only* the selected kana characters.
4.  A random word from this filtered list is then displayed to the user, providing a contextual way to practice what they've learned.

---

Happy coding, and enjoy your journey into the world of Japanese!
