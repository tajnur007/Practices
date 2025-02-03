import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  readonly navItems = [
    {
      name: 'Observables',
      route: 'observables'
    },
    {
      name: 'Observer',
      route: 'observer'
    },
    {
      name: 'Operators',
      route: 'operators'
    },
    {
      name: 'Subscriptions',
      route: 'subscriptions'
    },
    {
      name: 'Subjects',
      route: 'subjects'
    },
    {
      name: 'Schedulers',
      route: 'schedulers'
    },
  ]

  constructor(private router: Router) {}

  isActive(url: string): boolean {
    return this.router.url.includes(url);
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

}
