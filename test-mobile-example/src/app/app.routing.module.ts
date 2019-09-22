import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UsersComponent} from './components/users/users.component';

const routes: Routes = [
  { path: '',
    component: UsersComponent
  }
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {}
