import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './pages/residences/residences.component';
import { FormResidenceComponent } from './pages/form-residence/form-residence.component';
import { FormAppartmentComponent } from './pages/form-appartment/form-appartment.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: ResidencesComponent }, 
  { path: 'addResidence', component: FormResidenceComponent },
  { path: 'addAppartement', component: FormAppartmentComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
