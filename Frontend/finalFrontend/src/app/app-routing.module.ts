import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolComponent } from './components/gestion/rol/rol.component';
import { RolFormComponent } from './components/gestion/rol-form/rol-form.component';
import { PersonaComponent } from './components/gestion/persona/persona.component';
import { PersonaFormComponent } from './components/gestion/persona-form/persona-form.component';
import { AreaComponent } from './components/gestion/area/area.component';
import { AreaFormComponent } from './components/gestion/area-form/area-form.component';
import { FacebookComponent } from './components/facebook/facebook.component';

const routes: Routes = [
  { path: 'rol', component: RolComponent},
  { path: 'rol-form/:id', component: RolFormComponent},
  { path: 'persona', component: PersonaComponent},
  { path: 'persona-form/:id', component: PersonaFormComponent},
  { path: 'area', component: AreaComponent},
  { path: 'area-form/:id', component: AreaFormComponent},
  { path: 'facebook', component: FacebookComponent},
  { path: '**', pathMatch:'full',redirectTo:'facebook'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
