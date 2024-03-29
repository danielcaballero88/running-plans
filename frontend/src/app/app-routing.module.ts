import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GetStartedComponent } from 'src/app/components/views/get-started/get-started.component'
import { HomeComponent } from 'src/app/components/views/home/home.component'
import { PaceChartComponent } from 'src/app/components/views/pace-chart/pace-chart.component'
import { RunningPlanComponent } from 'src/app/components/views/running-plan/running-plan.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'pace-chart', component: PaceChartComponent },
  { path: 'running-plan', component: RunningPlanComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
