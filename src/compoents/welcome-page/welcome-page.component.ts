import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { NavigatingService } from 'src/services/navigating.service';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent {
  constructor(private navService: NavigatingService) {}

  goToCategories() {
    this.navService.navigateTo('/categories');
  }
}
