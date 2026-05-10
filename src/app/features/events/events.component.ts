import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventItem } from '../../core/models/event.model';
import { EventDataService } from '../../core/services/event-data.service';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgClass, RouterLink, SpinnerComponent],
  templateUrl: './events.component.html'
})
export class EventsComponent {
  private readonly eventData = inject(EventDataService);
  readonly isLoading = signal(true);
  readonly selectedCategory = signal('All');
  readonly categories = ['All', ...this.eventData.getCategories()];
  readonly events = signal<EventItem[]>([]);
  readonly filteredEvents = computed(() => {
    const category = this.selectedCategory();
    return category === 'All' ? this.events() : this.events().filter((event) => event.category === category);
  });

  constructor() {
    setTimeout(() => {
      this.events.set(this.eventData.getEvents());
      this.isLoading.set(false);
    }, 650);
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
