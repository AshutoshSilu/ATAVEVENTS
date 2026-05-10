import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventDataService } from '../../../core/services/event-data.service';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, RouterLink, SpinnerComponent],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly eventData = inject(EventDataService);
  readonly isSubmitting = signal(false);
  readonly message = signal<{ type: 'success' | 'error'; text: string } | null>(null);
  readonly eventOptions = this.eventData.getEvents().map((event) => event.title);

  readonly registerForm = this.fb.nonNullable.group(
    {
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]{8,15}$/)]],
      eventSelection: [this.route.snapshot.queryParamMap.get('event') ?? '', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    },
    { validators: RegisterComponent.passwordsMatch }
  );

  static passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password && confirmPassword && password !== confirmPassword ? { passwordsMismatch: true } : null;
  }

  submit(): void {
    this.message.set(null);
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      this.message.set({ type: 'error', text: 'Please fix the highlighted registration details.' });
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.message.set({ type: 'success', text: 'Registration successful! Your booking request has been received.' });
      this.registerForm.reset();
    }, 900);
  }
}
