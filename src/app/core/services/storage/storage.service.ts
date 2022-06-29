/**
 * localStorage 서비스.
 * localStorage 에 데이터를 저장하기, 가져오기, 삭제하기등 기능이 있다.
 */

import { Inject, Injectable, InjectionToken } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export function storageFactory() {
  return typeof window === undefined || typeof localStorage === undefined
    ? null
    : localStorage;
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken('local-storage', {
  providedIn: 'root',
  factory: storageFactory,
});

@Injectable({ providedIn: 'root' })
export class StorageService {
  supported(): Observable<boolean> {
    return this.storage !== null ? of(true) : throwError(() => 'Local Storage Not Supported');
  }

  /**
   * * localStorage 에서 아이템 가져오기
   * @param key
   * @returns
   */
  getItem(key: string): Observable<any | null> {
    return this.supported().pipe(
      map(() => this.storage.getItem(key)),
      map((value: string | null) => (value ? JSON.parse(value) : null)),
    );
  }

  /**
   * * localStorage 에 아이템 세팅하기
   * @param key
   * @param value
   * @returns
   */
  setItem(key: string, value: any): Observable<boolean> {
    return this.supported().pipe(
      tap(() => this.storage.setItem(key, JSON.stringify(value))),
      map(() => true),
    );
  }

  /**
   * * localStorage 에 아이템 지우기
   * @param key
   */
  remove(key: string): Observable<boolean> {
    return this.getItem(key).pipe(
      tap((value: any) => value !== null && this.storage.removeItem(key)),
      map(() => true),
    );
  }

  clear(): Observable<boolean> {
    return this.supported().pipe(
      tap(() => this.storage.clear()),
      map(() => true),
    );
  }

  constructor(@Inject(LOCAL_STORAGE_TOKEN) private storage: Storage) {}
}
