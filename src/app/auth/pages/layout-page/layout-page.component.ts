/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { SidemenuComponent } from '../../../shared/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { GamesService } from '../../../games/services/games.service';
import { Game } from '../../../games/interfaces/game.interface';
import { GameCardComponent } from '../../../game-card/game-card.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterModule,SidemenuComponent, GameCardComponent],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export default class LayoutPageComponent implements OnInit{

  public games: Game[] = [];

  constructor(private gamesService: GamesService){}
  
  ngOnInit(): void {
    this.gamesService.getGames()
        .subscribe((games: any) => {
          this.games = games.results;
          console.log(this.games);
        } );
  }

}
