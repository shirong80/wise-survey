import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// services
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  signInYn$: Observable<boolean>;

  constructor(private storageService: StorageService, private router: Router) {
    // 로그인 여부를 체크. 로그인 되어 있을 경우 -> localStorage 에 jwt 값을 저장하고 있다.
    this.signInYn$ = this.storageService.getItem('jwt').pipe(map((value) => value !== null));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.signInYn$.pipe(
      map((yn) => {
        if (yn) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }),
    );
  }
}
