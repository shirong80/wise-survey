import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as _ from 'lodash';
// services
import { ApiRequestService } from 'src/app/core/services/api/api-request.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
// models
import { ILoginRq } from '../models';
import { map, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })

export class AuthService {
  // * 로그인 API 호출주소
  loginApiUrl: string = 'https://t-api.landmaster.co.kr/api/login';

  // 해당 서비스에서 유저의 로그인 정보를 저장한다.

  /**
   * * 로그인 API 호출부
   * 로그인 API 는 POST 메소드를 사용할것
   * 로그인 성공 이후에는 반드시 storageService 를 사용하여 jwt 를 localStorage 에 저장해줄것
   * @param params 파라미터는 ILoginRq 인터페이스를 구현할것
   */
  login(params: ILoginRq) {
    console.log(params, '파라미터_RQ');
    return this.apiService.post(this.loginApiUrl, params).pipe(
      map((user: any) => {
        if (user && user.token) {
          this.storageService.setItem('currentUser', JSON.stringify(user));
        }
          console.log(user, '유저');
          return user;
      }));

    // return this.apiService.post(this.loginApiUrl, {
    //   params.mb_email,
    //   params.mb_password
    // });
  }

  constructor(private apiService: ApiRequestService, private storageService: StorageService) {

    this.login({mb_email: 'jdjdj', mb_password: 'ddd'});


    // apiService.post(this.loginApiUrl)

    //! setItem으로 로컬스토리지에 저장 - key, value
    // storageService.setItem()
  }


}
