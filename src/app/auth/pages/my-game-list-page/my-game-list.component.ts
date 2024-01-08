import { Component, OnInit, computed, inject } from '@angular/core';
import { GameCardComponent } from '../../../game-card/game-card.component';
import { Game } from '../../../games/interfaces/game.interface';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-game-list',
  standalone: true,
  imports: [CommonModule, GameCardComponent],
  templateUrl: './my-game-list.component.html',
  styleUrl: './my-game-list.component.css'
})
export default class MyGameListComponent implements OnInit{

  //constructor(private gamesService: GamesService){}

    // Tu array que deseas almacenar en localStorage
    public games: Game[] = [];

    ngOnInit(): void {
    const storedGames = localStorage.getItem('myGamesArray');
    const myGamesArray = storedGames ? JSON.parse(storedGames) : [];
    this.games = myGamesArray;

    }

  private authService = inject (AuthService);

  public user = computed(() => this.authService.currentUser());

  onLogout(){
    this.authService.logout();
  }

}
