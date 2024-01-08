/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit} from '@angular/core';
import { Game } from '../games/interfaces/game.interface';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent implements OnInit{

    public games: Game[] = [];
    public myGames: Game[] = [];
    public buttonVisible = true; 

    @Input() game!: Game;

    ngOnInit(): void {
      const storedGames = localStorage.getItem('myGamesArray');
      const existingGames = storedGames ? JSON.parse(storedGames) : [];
      
      const isGameInLocalStorage = existingGames.some((g: { id: number; }) => g.id === this.game.id);
      this.buttonVisible = !isGameInLocalStorage;
    }

    addGame() {
      const storedGames = localStorage.getItem('myGamesArray');
      const existingGames = storedGames ? JSON.parse(storedGames) : [];
      existingGames.push(this.game);
      localStorage.setItem('myGamesArray', JSON.stringify(existingGames));

      this.myGames = existingGames;
      this.buttonVisible = false;
    }

    kickGame() {
      const storedGames = localStorage.getItem('myGamesArray');
    const existingGames = storedGames ? JSON.parse(storedGames) : [];

    const index = existingGames.findIndex((g: { id: number; }) => g.id === this.game.id);

    if (index !== -1) {
      existingGames.splice(index, 1);
      
      localStorage.setItem('myGamesArray', JSON.stringify(existingGames));

      this.myGames = existingGames;

      this.buttonVisible = true;
    }
    }

  }

