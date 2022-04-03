import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageModule } from './pages/dashboard.page-module';

const routes: Routes = [{ 
        path: '', 
        loadChildren: () => DashboardPageModule
      }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
