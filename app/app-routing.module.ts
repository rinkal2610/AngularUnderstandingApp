import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PipeexComponent } from './pipeex/pipeex.component';
import { BindingComponent } from './binding/binding.component';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'pipeex',component:PipeexComponent},
  {path:'binding',component:BindingComponent},
  {path:'animals',component:AnimalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
