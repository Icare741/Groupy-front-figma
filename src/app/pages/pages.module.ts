import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { CoreModule } from '../core/core.module';




@NgModule({
  declarations: [
    PageAccueilComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    
  ],
exports: [
  
]
})
export class PagesModule { }
