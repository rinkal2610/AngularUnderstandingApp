import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PipeexComponent } from './pipeex/pipeex.component';
import { BindingComponent } from './binding/binding.component';
import { AnimalsComponent } from './animals/animals.component';
import { NavComponent } from './nav/nav.component';
import { SalaryPipe } from './salary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipeexComponent,
    BindingComponent,
    AnimalsComponent,
    NavComponent,
    SalaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
