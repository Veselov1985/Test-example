import {Component} from '@angular/core';
import {MobileService} from "./service/mobile.service";
import {Observable} from "rxjs";
import {ICompany} from "./shared/company.interface";
import {tap} from "rxjs/operators";
import {PayBillComponent} from "./components/pay-bill/pay-bill.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoading = true;
  public companies$!: Observable<ICompany[]>;

  constructor(
    private mobileService: MobileService,
    private dialog: MatDialog,
  ) {
    this.companies$ = this.mobileService.getCompanies().pipe(
      tap(() => this.isLoading = !this.isLoading)
    );
  }

  public openPayDialog(id: number) {
    this.dialog.open(PayBillComponent, {
      width: '500px',
      data: id,
    });
  }


}
