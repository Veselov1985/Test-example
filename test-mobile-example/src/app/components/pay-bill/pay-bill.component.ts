import {Component, Inject, OnInit, Self} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MobileService} from "../../service/mobile.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ICompany} from "../../shared/company.interface";
import {IPayBill} from "../../shared/pay-bill.interface";
import {mergeMap, takeUntil} from "rxjs/operators";
import {NgOnDestroy} from "../../@core/shared/services/destroy.service";
import {EMessagePay} from "../../shared/enum/message-pay.enum";
import {of} from "rxjs";

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.scss'],
  providers: [NgOnDestroy]
})
export class PayBillComponent implements OnInit {
  isLoading = false;
  payForm: FormGroup;
  company: ICompany = this.mobileService.getCompanyItem(this.id);

  get form(): IPayBill {
    return this.payForm.value;
  }

  constructor(
    private mobileService: MobileService,
    @Inject(MAT_DIALOG_DATA) public id: number,
    public dialogRef: MatDialogRef<PayBillComponent>,
    @Self() private onDestroy$: NgOnDestroy,
  ) {
    this.registerControl(this.id);
    const formChanges = this.payForm.valueChanges.pipe(
      takeUntil(this.onDestroy$)
    );
  }

  ngOnInit() {
  }

  registerControl(id: number) {
    this.payForm = new FormGroup({
      id: new FormControl(id),
      pay: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(1000)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }

  public pay() {
    this.toggleLoader();
    this.mobileService.pay(this.form)
      .pipe(
        mergeMap((response: boolean) => {
          const title = response ? EMessagePay.Success : EMessagePay.Error;
            this.mobileService.openSnackBar(title, response);
            return of(response)
        })
      )
      .subscribe((res: boolean) => {
        if (res) this.dialogRef.close();
        this.toggleLoader();
      })
  }

  private toggleLoader() {
    this.isLoading = !this.isLoading;
  }
}
