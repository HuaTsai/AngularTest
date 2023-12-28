import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method === 'POST') {
    const newreq = req.clone({ headers: new HttpHeaders({token: '12345'}) });
    return next(newreq);
  }
  return next(req);
};
