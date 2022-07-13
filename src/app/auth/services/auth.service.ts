import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as _ from 'lodash';
// services
import { ApiRequestService } from 'src/app/core/services/api/api-request.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
// models
import { ILoginRq } from '../models';

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
  login(params: ILoginRq) {}

  constructor(private apiService: ApiRequestService, private storageService: StorageService) {}
}
