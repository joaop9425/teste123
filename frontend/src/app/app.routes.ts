import { Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: TestComponent
      }
    ]
  }
];
