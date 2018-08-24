import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GistListComponent } from './components/gist-list/gist-list.component';
import { GistDetailComponent } from './components/gist-detail/gist-detail.component';
import { AboutComponent } from './components/about/about.component';
import { HttpErrorHandler }     from './services/http-error-handler.service'
import { MessageService }       from './services/message.service';
import { MessageComponent } from './components/message/message.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: 'gist-list', component: GistListComponent, data: { title: 'Gist List' } },
  { path: 'gist-details/:id', component: GistDetailComponent, data: { title: 'Gist Details' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login GitHub' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } }
];

@NgModule({
  declarations: [
    AppComponent,
    GistListComponent,
    GistDetailComponent,
    AboutComponent,
    MessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
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
