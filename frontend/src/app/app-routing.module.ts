import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GetStartedComponent } from 'src/app/components/get-started/get-started.component'
import { HomeComponent } from 'src/app/components/home/home.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
