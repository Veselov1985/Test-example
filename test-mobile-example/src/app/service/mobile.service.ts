import {Injectable} from '@angular/core';
import {FakeApiService} from "../@core/shared/services/fake.api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {ICompany} from "../shared/company.interface";
import {IPayBill} from "../shared/pay-bill.interface";
import {MatSnackBar} from "@angular/material";


@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private storeCompanies: BehaviorSubject<ICompany[]> = new BehaviorSubject<ICompany[]>([]);

  constructor(
    private fakeApi: FakeApiService,
    private snackBar: MatSnackBar
  ) {
  }

  public getCompanies(): Observable<any> {
    return this.fakeApi.post('mobileCompany')
      .pipe(
        tap((companies: ICompany[]) => this.storeCompanies.next(companies))
      );
  }

  public getCompanyItem(id: number): ICompany {
    return this.storeCompanies.getValue().find((item: ICompany) => item.id === id)
  }

  public pay(params: IPayBill) {
    return this.fakeApi.pay(params);
  }

  public openSnackBar(title, state: boolean) {
    const panelClass = state ? 'snack__success' : 'snack__error';
    return this.snackBar.open(title, 'Ok', {
      panelClass,
      duration: 5000,
    })
  }
}
