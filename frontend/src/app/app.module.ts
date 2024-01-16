import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppMaterialModule } from 'src/app/app-material/app-material.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FooterComponent } from './components/footer/footer.component'
import { GetStartedComponent } from './components/get-started/get-started.component'
import { HeaderComponent } from './components/header/header.component'
import { HomeComponent } from './components/home/home.component'
import { NavigationComponent } from './components/navigation/navigation.component'
import { PaceChartComponent } from './components/pace-chart/pace-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GetStartedComponent,
    PaceChartComponent,
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
