import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { HighlightPathComponent } from "./highlight-path/highlight-path.component";
const routes: Routes = [
    {
        path: 'HighlightPath',
        component: HighlightPathComponent
      }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TestChartsRoutingModule { }