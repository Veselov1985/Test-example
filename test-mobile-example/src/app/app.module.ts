import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from "./@core/core.module";
import {PayBillComponent} from './components/pay-bill/pay-bill.component';
import {NgxMaskModule} from "ngx-mask";
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PayBillComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    PayBillComponent
  ]
})
export class AppModule {
}
