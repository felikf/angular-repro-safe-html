import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'test',
    loadChildren: () => import('./test-module/test-module.module').then(m => m.TestModuleModule)
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true, onSameUrlNavigation: 'reload' });
