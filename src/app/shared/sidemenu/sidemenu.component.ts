import { Component, computed, inject } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [MenuItemComponent, CommonModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  private authService = inject (AuthService);

  public user = computed(() => this.authService.currentUser()?.name);

}
