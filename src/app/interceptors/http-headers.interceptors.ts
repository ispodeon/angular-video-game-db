import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': '6f0dada934msh2de3f120e9cb858p10440djsn1f065143255e',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            }
            ,
            setParams: {
                key: '9952a0811c0048c19a1bacaa1c531c78',
            }
            // ,
            // setParams: {
            //     key: 'e40e743af2c94b0c916a8aa618fb4473',
            // }
        });
        return next.handle(req);
    }
}