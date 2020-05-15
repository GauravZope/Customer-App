import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './sign-in/login/login.component';
import { ForgotPasswordComponent } from './sign-in/forgot-password/forgot-password.component';
import { NoAccessComponent } from './dashboard/no-access/no-access.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:"/login", pathMatch:"full"
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'forgot-password',
    component: ForgotPasswordComponent
  },{
    path:'no-access',
    component: NoAccessComponent
  },
  { path: 'dashboard',
    canActivate:[AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module')
                  .then(m => m.dashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
