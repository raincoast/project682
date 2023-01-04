import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import "tw-elements"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-27dgfgnycmwfb08m.uk.auth0.com',
      clientId: 'hG72VXjX7oY0vPELtvW6jb5jvlsDXsYA',
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
