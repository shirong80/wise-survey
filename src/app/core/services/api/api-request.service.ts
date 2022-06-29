import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class ApiRequestService {
  constructor(private http: HttpClient) {}

  /**
   * get
   * get api 호출
   * @param url 전송될 api
   * @param params queryParams
   * @param type 추가 { key: value }셋 파라미터
   */
  public get(url: string, params?: any, type?: any): Observable<any> {
    const Param: any = {
      params: this.toHttpParams(params),
    };

    if (!_.isEmpty(type)) {
      for (const key in type) {
        if (Object.prototype.hasOwnProperty.call(type, key)) {
          Param[key] = type[key];
        }
      }
    }

    return this.http.get(url, Param);
  }

  /**
   * post
   * post api 호출
   * @param url 전송될 api
   * @param params 전송될 params
   */
  public post(url: string, params?: any): Observable<any> {
    return this.http.post(url, params);
  }
  // RS가 html 형태로 내려오는 경우 RS파싱에러로 추가
  public postText(url: string, params?: any): Observable<any> {
    return this.http.post(url, params, { responseType: 'text' });
  }
  public postBlob(url: string, params?: any): Observable<any> {
    return this.http.post(url, params, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      responseType: 'blob' as 'json',
    });
  }

  // /**
  //  * 제휴사 운임조회
  //  * @param url
  //  * @param params
  //  */
  // public postChannelPrice(url: string, body?: any): Observable<any> {
  //   // 토큰세팅 - 기본값: 스카이스캐너
  //   let token = 'Bearer h=CxuWiy6FeXFnHVSGbkl2%5aBqpq$2E';

  //   if (url.indexOf('/sky/') > -1) {
  //     // 스카이스캐너 일 경우
  //     token = 'Bearer h=CxuWiy6FeXFnHVSGbkl2%5aBqpq$2E';
  //   } else if (url.indexOf('/kyk/') > -1) {
  //     // 카약 일 경우
  //     token = 'Bearer D8d+Nsy-Fch-QSey!dcRI34dUgeVA$JT';
  //   }

  //   // 특이한 API 방식때문에 body를 params로 전환해야 한다. 그리고 http 호출에서 body는 빈오브젝으로 세팅
  //   return this.http
  //     .post(url, null, {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //         Authorization: token,
  //       }),
  //       params: this.toHttpParams(body),
  //       responseType: 'json',
  //     })
  //     .pipe(catchError(this.handleError));
  // }

  /**
   * put
   * put api 호출
   * @param url 전송될 api
   * @param params 전송될 params
   */
  public put(url: string, params?: any): Observable<any> {
    return this.http.put(url, params);
  }

  /**
   * patch
   * patch api 호출
   * @param url 전송될 api
   * @param params 전송될 params
   */
  public patch(url: string, params?: any): Observable<any> {
    return this.http.patch(url, params);
  }

  /**
   * delete
   * delete api 호출
   * @param url 전송될 api
   * @param params queryParams
   */
  public delete(url: string, params?: any): Observable<any> {
    return this.http.delete(url, this.makeDeleteHttpOption(params));
  }

  /**
   * toHttpParams
   * @param params Object 혹은 리스트 형식의 파라미터
   */
  private toHttpParams(params: any): any {
    if (params) {
      if (params.constructor === Array) {
        return params.reduce((p, key) => {
          const objKey = Object.keys(key)[0];
          return p.append(objKey, key[objKey]);
        }, new HttpParams());
      } else {
        return Object.getOwnPropertyNames(params).reduce(
          (p, key) => p.append(key, params[key]),
          new HttpParams(),
        );
      }
    } else {
      return undefined;
    }
  }

  private makeDeleteHttpOption(params: any) {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: params,
    };
  }
}
