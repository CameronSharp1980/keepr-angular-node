import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageComponent } from './front-page.component';
import { KeepModule } from '../shared/keep/keep.module';

@NgModule({
  imports: [
    CommonModule,
    KeepModule
  ],
  declarations: [FrontPageComponent],
  exports: [FrontPageComponent]
})
export class FrontPageModule { }
