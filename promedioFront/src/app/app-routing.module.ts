import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AvgRegisterComponent } from './avg-register/avg-register.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: '', component: IndexComponent },
  {path: 'newAvg', component: AvgRegisterComponent },
  {path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
