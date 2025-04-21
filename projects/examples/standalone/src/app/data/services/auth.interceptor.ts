import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResourceFn } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

export const authTokenInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next:HttpHandlerFn) => {
    console.log(req)
    const token = inject(AuthService).token
    if(!token) return next(req);

    req = req.clone({setHeaders: {
        Authorization: `Bearer ${token}`
    }})

    return next(req)
}