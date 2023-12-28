import { InjectionToken } from "@angular/core";

export const localStorageToken = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  // sessionStorage, window.localStorage, etc...
  factory() { return localStorage; }
});