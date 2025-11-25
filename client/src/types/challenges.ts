/**
 * Type definitions for coding challenges system
 * These types support a flexible, reusable challenge framework
 */

export type DifficultyLevel = "easy" | "medium" | "hard";

export interface CodingChallenge {
  id: string;
  title: string;
  description: string;
  starterCode: string;
  solutionCode: string;
  topicTag: string;
  level: DifficultyLevel;
  hints?: string[]; // Optional hints for students
  expectedOutput?: string; // Optional expected output for reference
}

export interface ChallengeSet {
  topicName: string;
  topicSlug: string;
  description: string;
  challenges: CodingChallenge[];
}
