import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarComponent } from './components/menubar/menubar.component';

import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { BreadcrumbModule } from '@xng/my-xng';
=======
import { BreadcrumbModule } from 'xng-breadcrumb';
>>>>>>> b31cb894c3840682f98af3c97d07b45524e205ff

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
  ],
  imports: [CommonModule, BreadcrumbModule, RouterModule],
})
export class LayoutModule {}
