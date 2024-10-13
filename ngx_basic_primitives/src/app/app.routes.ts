import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./test-charts/test-charts.module').then(m => m.TestChartsModule)
      }
];
