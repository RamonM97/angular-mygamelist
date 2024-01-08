/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';
import { NavmenuComponent } from '../shared/navmenu/navmenu.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, SidemenuComponent, NavmenuComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent {

}
