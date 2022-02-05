import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path:'transactions',component:TransactionsComponent
  },
  {
    path:'home-page',component:HomePageComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'',component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
