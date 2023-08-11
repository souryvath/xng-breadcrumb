import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ROUTER_COMPONENTS, AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { CharacterComponent } from './character/character.component';
<<<<<<< HEAD
import { BreadcrumbModule } from '@xng/my-xng';
=======
import { BreadcrumbModule } from 'xng-breadcrumb';
>>>>>>> b31cb894c3840682f98af3c97d07b45524e205ff

@NgModule({
  declarations: [
    AppComponent,
    ...ROUTER_COMPONENTS,
    BookComponent,
    CharacterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BreadcrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
