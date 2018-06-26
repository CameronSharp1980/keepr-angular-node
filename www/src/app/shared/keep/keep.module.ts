import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeepComponent } from './keep.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KeepComponent],
  exports: [KeepComponent]
})
export class KeepModule { }
