import { HttpEvent,HttpInterceptor, HttpHandler,HttpRequest,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
   
   
export class HttpErrorInterceptor implements HttpInterceptor {
   
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
      return next.handle(request)
   
        .pipe(
   
          retry(1),
   
          catchError((error: HttpErrorResponse) => {
   
            let errorMessage = [];
   
   
              errorMessage=error.error.errors;

           
            errorMessage.forEach(error => {
              window.alert(error.message);
            });
   
            return throwError(errorMessage);
   
          })
   
        )
   
    }
   
   }