/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environments } from "../../../environments/environments";
import { Game } from "../interfaces/game.interface";

@Injectable({providedIn: 'root'})
export class GamesService{
    private urlAPI: string = environments.urlAPI;
    private keyAPI: string = environments.keyAPI;

    constructor(private httpClient: HttpClient){}

    getGames(): Observable<Game[]> {
        return this.httpClient.get<Game[]>(`${this.urlAPI}/games${this.keyAPI}`);
    }
}