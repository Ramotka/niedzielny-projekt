import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageModule } from './pages/dashboard.page-module';
import { EventFormPageModule } from './pages/event-form.page-module';

const routes: Routes = [{ 
        path: '', 
        loadChildren: () => DashboardPageModule
      },
  { 
        path: 'event-form', 
        loadChildren: () => EventFormPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
