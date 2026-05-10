import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, RouterLink, SpinnerComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  readonly isSubmitting = signal(false);
  readonly message = signal<{ type: 'success' | 'error'; text: string } | null>(null);

  readonly loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rememberMe: [true]
  });

  submit(): void {
    this.message.set(null);
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.message.set({ type: 'error', text: 'Enter a valid email and password to continue.' });
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.message.set({ type: 'success', text: 'Welcome back! Login validation completed successfully.' });
      this.loginForm.reset({ email: '', password: '', rememberMe: true });
    }, 800);
  }
}
