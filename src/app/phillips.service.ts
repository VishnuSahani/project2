import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhillipsService {

  ipoHeader: string = "ipo"; //set default header
  ipoActive: 'ongoing' | 'upcoming' | 'closed' = 'ongoing';
  private _ipoRequest$: Observable<any> | null = null;

  ipoOrderData: any = null;


  constructor(
    private http: HttpClient
  ) { }

  getIPO(): Observable<any> {
    if (this._ipoRequest$) {
      return this._ipoRequest$;
    }
    this._ipoRequest$ = this.getAPI(this.ipoListUrl).pipe(
      shareReplay(1),
      finalize(() => {
        this._ipoRequest$ = null;
      })
    );
    return this._ipoRequest$;
  }


  getAPI(url: string) {
    return this.http.get(url).pipe(
      catchError((err: any) => {
        const errMsg = err.message || "Server error occurred";
        return throwError(() => new Error(errMsg))
      })
    )
  }

  // url 
  ipoListUrl = "https://p9livebacktest.phillipcapital.in/openissue";
}

