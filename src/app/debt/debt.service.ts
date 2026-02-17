import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  debtHeader: "debt" | "orderbook" = 'debt';
  debtActive: 'ongoing' = 'ongoing';

  private _debtRequest$: Observable<any> | null = null;
  debtOrderData: any = null;
  constructor() { }

  getdebt(): Observable<any> {
    if (this._debtRequest$) {
      return this._debtRequest$;
    }
    // this._debtRequest$ = this.getAPI(this.debtListUrl).pipe(
    //   shareReplay(1),
    //   finalize(() => {
    //     this._debtRequest$ = null;
    //   })
    // );
    return this._debtRequest$;
  }
}
