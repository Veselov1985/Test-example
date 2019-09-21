import {RouterModule, Routes} from '@angular/router';
import {CounterComponent} from './components/counter/counter.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '',
    component: CounterComponent
  }
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {}
