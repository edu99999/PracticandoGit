import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FacebookModule } from 'ngx-facebook';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RolComponent } from './components/gestion/rol/rol.component';
import { RolFormComponent } from './components/gestion/rol-form/rol-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonaComponent } from './components/gestion/persona/persona.component';
import { PersonaFormComponent } from './components/gestion/persona-form/persona-form.component';
import { AreaComponent } from './components/gestion/area/area.component';
import { AreaFormComponent } from './components/gestion/area-form/area-form.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RolComponent,
    RolFormComponent,
    PersonaComponent,
    PersonaFormComponent,
    AreaComponent,
    AreaFormComponent,
    FacebookComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, 
    HttpClientModule,FacebookModule.forRoot(),AlifeFileToBase64Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
