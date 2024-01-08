import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export default class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router      = inject(Router);
 
  public myForm: FormGroup = this.fb.group({
    name:     ["", [Validators.required, Validators.minLength(4)]],
    email:    ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });
 
  singup() {
    const {name, email, password} = this.myForm.value;
    this.authService.singup(name, email, password)
      .subscribe({
        next: () => {
          Swal.fire("Success", "Registration successful!", "success").then(() => {
            this.router.navigateByUrl("/auth/mylist");
          });
        },
        error: (message) => {
          Swal.fire("Error", message, "error")
        }
      })
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
  
}



