import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './@core/core.module';
import {PayBillComponent} from './components/pay-bill/pay-bill.component';
import {NgxMaskModule} from 'ngx-mask';
import {LoaderComponent} from './components/loader/loader.component';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './@core/shared/store/reducers/app.reducers';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {CounterComponent} from './components/counter/counter.component';
import {RouterModule} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PayBillComponent,
    LoaderComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    RouterModule,
    // RouterModule.forRoot({}),
    NgxMaskModule.forRoot(),
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
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
