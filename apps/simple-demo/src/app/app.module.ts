import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { BreadcrumbModule } from '@xng/my-xng';
=======
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
>>>>>>> b31cb894c3840682f98af3c97d07b45524e205ff
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { PageComponent } from './page.component';
@NgModule({
  declarations: [AppComponent, PageComponent],
  imports: [BrowserModule, BreadcrumbModule, AppRoutingModule],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent],
})
export class AppModule {}
