import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppMaterialModule } from 'src/app/app-material/app-material.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FooterComponent } from './components/shared/footer/footer.component'
import { HeaderComponent } from './components/shared/header/header.component'
import { NavigationComponent } from './components/shared/navigation/navigation.component'
import { GetStartedComponent } from './components/views/get-started/get-started.component'
import { HomeComponent } from './components/views/home/home.component'
import { PaceChartComponent } from './components/views/pace-chart/pace-chart.component'
import { RunningPlanComponent } from './components/views/running-plan/running-plan.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GetStartedComponent,
    PaceChartComponent,
    RunningPlanComponent,
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
