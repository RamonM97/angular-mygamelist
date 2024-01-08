import { Component, computed, effect, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthStatus } from './interfaces';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  
  private authService = inject(AuthService);
  private router      = inject(Router);

  public finishedAuthCheck = computed<boolean>(() => {
    if (this.authService.authStatus() === AuthStatus.checking){
      return false;
    }

    return true;
  });

  public authStatusChangedEffect = effect(() => {

    switch( this.authService.authStatus() ) {

      case AuthStatus.checking:
        return;

      case AuthStatus.authenticated:
        this.router.navigateByUrl('/auth/mylist');
        return;

      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login');
        return;

    }
  });
}
