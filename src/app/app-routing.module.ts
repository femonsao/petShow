import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
  path: '',
  component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'friends',
    component: FriendsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
