import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeepComponent } from './keep.component';
import { keepService } from './keep.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KeepComponent],
  exports: [KeepComponent],
  providers: [keepService]
})
export class KeepModule { }
