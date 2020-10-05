import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirtComponentComponent } from './pages/firt-component/firt-component.component';
import { CursosFirtComponent } from './cursos-firt/cursos-firt.component';

@NgModule({
  declarations: [
    AppComponent,
    FirtComponentComponent,
    CursosFirtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
