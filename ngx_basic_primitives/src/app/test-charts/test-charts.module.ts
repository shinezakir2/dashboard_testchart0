import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestChartsRoutingModule } from './test-charts.routing.module';
import { BasicPrimitivesModule } from 'ngx-basic-primitives';
import { HighlightPathComponent } from './highlight-path/highlight-path.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HighlightPathComponent],
  imports: [
    TestChartsRoutingModule,
    MatCardModule,
    BasicPrimitivesModule,
    CommonModule,
    MatProgressBarModule,
    MatIconModule
  ]
})
export class TestChartsModule { }
