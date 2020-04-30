import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValueRendererComponent } from './value-renderer/value-renderer.component';
import { CounterSlotComponent } from './counter-slot/counter-slot.component';

@NgModule({
  declarations: [
    ValueRendererComponent,
    CounterSlotComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterSlotComponent
  ]
})
export class CounterModule {
}
