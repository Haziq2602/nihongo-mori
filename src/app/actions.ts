'use server';

import { generateExampleSentences } from '@/ai/flows/generate-example-sentences';
import { generateAudio } from '@/ai/flows/generate-audio';

export interface SentenceResult {
    sentence: string;
    romaji: string;
    translation: string;
}

export async function generateSentencesAction(kana: string[]): Promise<{sentences?: SentenceResult[], error?: string}> {
  try {
    const result = await generateExampleSentences({ kana });
    return { sentences: result.sentences };
  } catch (error: any) {
    console.error('Error generating sentences:', error);
    return { error: error.message || 'An unexpected error occurred while generating sentences.' };
  }
}

export async function generateAudioAction(text: string): Promise<{audio?: string, error?: string}> {
    try {
        const result = await generateAudio(text);
        return { audio: result.audioDataUri };
    } catch (error: any) {
        console.error('Error generating audio:', error);
        return { error: error.message || 'An unexpected error occurred while generating audio.' };
    }
}
