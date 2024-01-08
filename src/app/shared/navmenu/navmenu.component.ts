import { Component } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.css'
})
export class NavmenuComponent {
  navVisible: boolean = false;

  openNav(){
    this.navVisible = !this.navVisible;
    console.log("holaaaa ")
  }
}
