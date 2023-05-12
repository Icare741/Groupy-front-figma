import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';



@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    NavComponent,
    HeaderComponent,
    BodyComponent
  ]
})
export class CoreModule { }
