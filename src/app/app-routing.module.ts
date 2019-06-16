import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'ticket-add', component: TicketAddComponent },
  { path: 'ticket-list', component: TicketListComponent },
  { path : '', component : LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
