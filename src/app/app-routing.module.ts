import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'ipo',
    loadChildren: () => import('./ipo/ipo.module').then(m => m.IpoModule)
  },
  {
    path: 'ofs',
    loadChildren: () => import('./ofs/ofs.module').then(m => m.OfsModule)
  },
  {
    path: 'mutual-fund',
    loadChildren: () => import('./mutual-fund/mutual-fund.module').then(m => m.MutualFundModule)
  },
  {
    path: 'debt',
    loadChildren: () => import('./debt/debt.module').then(m => m.DebtModule)
  },
  {
    path: 'research',
    loadChildren: () => import('./research/research.module').then(m => m.ResearchModule)
  },
  {
    path: 'thematic-basket',
    loadChildren: () => import('./thematic-basket/thematic-basket.module').then(m => m.ThematicBasketModule)
  },
  {
    path: '',
    redirectTo: 'ipo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
