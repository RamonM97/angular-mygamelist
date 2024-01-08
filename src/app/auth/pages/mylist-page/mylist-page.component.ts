import { Component, OnInit, computed, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { GamesService } from '../../../games/services/games.service';
import { Game } from '../../../games/interfaces/game.interface';
import { GameCardComponent } from '../../../game-card/game-card.component';

@Component({
  selector: 'app-mylist-page',
  standalone: true,
  imports: [CommonModule, GameCardComponent],
  templateUrl: './mylist-page.component.html',
  styleUrl: './mylist-page.component.css'
})
export default class MylistPageComponent implements OnInit {

  public games: Game[] = [];

  constructor(private gamesService: GamesService){}

  ngOnInit(): void {
    this.gamesService.getGames()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .subscribe((games: any) => {
          this.games = games.results;
          console.log(this.games);
        } );
  }

  private authService = inject (AuthService);

  public user = computed(() => this.authService.currentUser());

  onLogout(){
    this.authService.logout();
  }

  
  
  

}
