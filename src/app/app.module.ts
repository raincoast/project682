import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import "tw-elements"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment as env } from 'src/environments/environments';
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [`${env.dev.url}/*`]
      }
    })

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
