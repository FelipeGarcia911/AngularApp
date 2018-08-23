import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GistListComponent } from './gist-list/gist-list.component';
import { GistDetailComponent } from './gist-detail/gist-detail.component';
import { AboutComponent } from './about/about.component';
import { HttpErrorHandler }     from './services/http-error-handler.service'
import { MessageService }       from './services/message.service';

const appRoutes: Routes = [
  { path: 'gist-list', component: GistListComponent, data: { title: 'Gist List' } },
  { path: 'gist-details/:id', component: GistDetailComponent, data: { title: 'Gist Details' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } }
];

@NgModule({
  declarations: [
    AppComponent,
    GistListComponent,
    GistDetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
