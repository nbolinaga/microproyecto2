import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './components/detalles/detalles.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaComponent } from './components/lista/lista.component';
import { AuthenticationGuardGuard } from './guards/authentication-guard.guard'

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'detalles/:id', component: DetallesComponent, canActivate: [AuthenticationGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
