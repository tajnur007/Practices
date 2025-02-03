import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { APP_ROUTES } from '../utils/app-routes';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  readonly navItems = Object.values(APP_ROUTES);

  constructor(private router: Router) {}

  isActive(url: string): boolean {
    return this.router.url.includes(url);
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

}
