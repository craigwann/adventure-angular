import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
   {
      path: ':id/edit',
      component: EditUserComponent
    }
 ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
