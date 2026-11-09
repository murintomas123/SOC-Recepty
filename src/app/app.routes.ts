import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Recepty } from './pages/recepty/recepty';
import { Oblubene } from './pages/oblubene/oblubene'; 
import { Vytvorit } from './pages/vytvorit/vytvorit';
import { Zoznam } from './pages/zoznam/zoznam';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'recepty', component: Recepty },
  { path: 'oblubene', component: Oblubene },
  { path: 'vytvoriť', component: Vytvorit },
  { path: 'zoznam', component: Zoznam },
];