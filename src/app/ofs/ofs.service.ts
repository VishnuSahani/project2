import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfsService {

  ofsHeader: "ofs" | "orderbook" = 'ofs';
  ofsActive: 'ongoing' = 'ongoing';

  private _ofsRequest$: Observable<any> | null = null;
  ofsOrderData: any = null;
  constructor() { }

  getOfs(): Observable<any> {
    if (this._ofsRequest$) {
      return this._ofsRequest$;
    }
    // this._ofsRequest$ = this.getAPI(this.ofsListUrl).pipe(
    //   shareReplay(1),
    //   finalize(() => {
    //     this._ofsRequest$ = null;
    //   })
    // );
    return this._ofsRequest$;
  }
}
