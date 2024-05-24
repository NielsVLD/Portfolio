import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf, NgIf, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  word: string = '';
  guessedLetters: Set<string> = new Set();
  maxAttempts: number = 6;
  attemptsLeft: number = this.maxAttempts;

  words: string[] = ['angular', 'python', 'typescript', 'html', 'css'];

  constructor() {
    this.pickRandomWord();
  }

  pickRandomWord(): void {
    this.word = this.words[Math.floor(Math.random() * this.words.length)];
    this.resetGame();
  }

  makeGuess(letter: string): void {
    if (!this.guessedLetters.has(letter)) {
      this.guessedLetters.add(letter);
      if (!this.word.includes(letter)) {
        this.attemptsLeft--;
      }
    }
  }

  resetGame(): void {
    this.guessedLetters.clear();
    this.attemptsLeft = this.maxAttempts;
  }

  getMaskedWord(): string {
    return this.word.replace(/\w/g, (char) =>
      this.guessedLetters.has(char) ? char : '_ ',
    );
  }

  isGameOver(): boolean {
    return this.isWordGuessed() || this.attemptsLeft <= 0;
  }

  isWordGuessed(): boolean {
    return this.getMaskedWord() === this.word;
  }
}
