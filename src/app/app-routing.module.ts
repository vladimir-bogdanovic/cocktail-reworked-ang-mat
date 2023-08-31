import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  WelcomePageComponent,
  CategoriesPageComponent,
  SingleCategoryComponent,
  CoctailDetailsComponent,
} from 'src/compoents';

const routes: Routes = [
  {
    path: 'welcome-page',
    component: WelcomePageComponent,
  },
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'categories',
    component: CategoriesPageComponent,
  },
  {
    path: 'category/:keyChar/:category',
    component: SingleCategoryComponent,
  },
  {
    path: 'coctail/:id',
    component: CoctailDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
