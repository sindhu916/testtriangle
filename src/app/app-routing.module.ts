import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdetailsformComponent } from './userdetailsform/userdetailsform.component';
import { AboutComponent } from './about/about.component';
import { AvailabilityComponent } from './availability/availability.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'home', component: UserdetailsformComponent,
    children: [
     { path: '', component: AboutComponent},
     { path: 'skills', component: SkillsComponent},
     { path: 'availability', component: AvailabilityComponent},
    ]
  },
  { path: '**', redirectTo: '' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
