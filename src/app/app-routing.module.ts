import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {UserComponent} from './user/user.component'
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { BootDemoComponent } from './boot-demo/boot-demo.component';
import { SearchageComponent } from './searchage/searchage.component';
import { TestComponent } from './test/test.component';
import { FastComponent } from './fast/fast.component';
import { PeriodicComponent } from './periodic/periodic.component';


const routes: Routes = [
  {path :'header',component:HeaderComponent},
  { path :'footer', component:FooterComponent  },
  {path :'user',component:UserComponent},
  {path:'form', component:SubmitFormComponent},
  {path:'bootdemo', component:BootDemoComponent},
  {path:'Serchage', component:SearchageComponent},
  {path:'test', component:TestComponent},
  {path:'fast', component:FastComponent},
  {path:'periodic',component:PeriodicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  name = 'Angular 5';
}
