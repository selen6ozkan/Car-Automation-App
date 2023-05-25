import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // const routes: Routes = [
  //   { path: '', redirectTo: '/anasayfa', pathMatch: 'full' },
  //   { path: 'anasayfa', component: AnasayfaComponent },
  //   { path: 'urunler', component: UrunlerComponent },
  //   { path: 'hakkimizda', component: HakkimizdaComponent },
  //   { path: 'iletisim', component: IletisimComponent }
  // ];
 }
