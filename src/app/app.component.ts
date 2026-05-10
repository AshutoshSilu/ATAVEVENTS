import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen text-slate-50">
      <app-header />
      <main class="pt-20">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `
})
export class AppComponent {}
