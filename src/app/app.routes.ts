import { Routes } from '@angular/router';
import { Login } from './pages/login/login'; 
import { Home } from './pages/home/home';
import { Recepty } from './pages/recepty/recepty';

export const routes: Routes = [
    { path: '', component: Home },
      { path: 'login', component: Login },
      { path: 'recepty', component: Recepty }
];