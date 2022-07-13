import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

// services
import { ApiInterceptorService } from 'src/app/core/services/api/api-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// custom module
import { LoginModule } from './auth/login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,

    LoginModule,
  ],
  providers: [
    {
      // url에 # 사용하지 않은 방식으로 설정
      // HashLocationStrategy: # 사용
      // PathLocationStrategy: # 사용안함
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true,
    },
    {
      // Angular 양방향 바인딩에서 한글이 짤리는 문제
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
