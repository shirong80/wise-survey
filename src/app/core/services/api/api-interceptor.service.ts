import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpResponseBase,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { finalize, catchError, switchMap, filter, take } from 'rxjs/operators';
import * as _ from 'lodash';
// services
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
  private requests: HttpRequest<any>[] = []; // 로딩관련
  private jwt$: Observable<string>;

  constructor(private storageService: StorageService) {
    this.jwt$ = this.storageService.getItem('jwt');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.jwt$.pipe(
      switchMap((jwt: string) => {
        if (jwt === null) {
          return next.handle(request);
        } else {
          request = this.addTokenHeader(request, jwt);
          return next.handle(request);
        }
      }),
    );
  }

  private removeRequest(req: HttpRequest<any>) {
    const i = this.requests?.indexOf(req);
    if (i > -1) {
      this.requests.splice(i, 1);
    }

    if (this.requests.length === 0) {
      // this.loaderService.hide();
    }
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({ headers: request.headers.set('authorization', 'Bearer ' + token) });
  }
}
