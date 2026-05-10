import { NgClass } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EventDataService } from '../../core/services/event-data.service';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, RouterLink, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly eventData = inject(EventDataService);
  private readonly fb = inject(FormBuilder);
  private carouselTimer?: ReturnType<typeof setInterval>;

  readonly slides = this.eventData.carouselSlides;
  readonly featuredEvents = this.eventData.getFeaturedEvents();
  readonly testimonials = this.eventData.testimonials;
  readonly eventTypes = ['Cultural Event', 'Corporate Event', 'DJ Night', 'Live Show', 'Wedding', 'Festival'];
  readonly activeSlide = signal(0);
  readonly isSubmitting = signal(false);
  readonly enquiryStatus = signal<'idle' | 'success'>('idle');
  readonly currentSlide = computed(() => this.slides[this.activeSlide()]);

  readonly enquiryForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]{8,15}$/)]],
    eventType: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(12)]]
  });

  ngOnInit(): void {
    this.carouselTimer = setInterval(() => this.nextSlide(), 4500);
  }

  ngOnDestroy(): void {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
    }
  }

  setSlide(index: number): void {
    this.activeSlide.set(index);
  }

  nextSlide(): void {
    this.activeSlide.update((index) => (index + 1) % this.slides.length);
  }

  submitEnquiry(): void {
    this.enquiryStatus.set('idle');
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.enquiryStatus.set('success');
      this.enquiryForm.reset();
    }, 900);
  }
}
