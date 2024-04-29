import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
import { confirmPasswordValidator } from './utils/password-validator';

@Component({
  selector: 'registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: confirmPasswordValidator('password', 'confirmPassword') });
  }

  registration(): void {
    if (this.registrationForm.invalid) return;

    const { name, email, password } = this.registrationForm.value;
    this.authService.signUp({ name, email, password });
  }
}
