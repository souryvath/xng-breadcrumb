import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { BreadcrumbService } from '@xng/my-xng';
=======
import { BreadcrumbService } from 'xng-breadcrumb';
>>>>>>> b31cb894c3840682f98af3c97d07b45524e205ff

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    if (this.router.url === '/') {
      // assuming current user's role is designer.
      // then user is navigated to designer's dashboard.
      const role = 'Designer';
      if (role === 'Designer') {
        const isDesigner = true;
        this.breadcrumbService.set('', {
          routeInterceptor: (routeLink) =>
            isDesigner ? '/designer' : routeLink,
        });
        this.router.navigate(['/designer']);
      }
    }
  }
}
