import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ViewTasksComponent } from './components/view-task/view-tasks.component';

const routes: Routes = [
  // {path:"view",component:ViewTasksComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
