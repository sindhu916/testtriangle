import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatDatepicker } from '@angular/material/datepicker';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { AvailabilityComponent } from './availability/availability.component';
import { UserdetailsformComponent } from './userdetailsform/userdetailsform.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    AvailabilityComponent,
    UserdetailsformComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [MatDatepicker],
  bootstrap: [AppComponent]
})
export class AppModule { }
