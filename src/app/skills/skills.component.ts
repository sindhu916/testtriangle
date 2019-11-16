import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { positionsData } from '../data';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  showDropDownFlag: boolean;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  positions = [];
  selectedPositions = [];
  fruit: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry', 'Pine Apple', 'Grapes', 'Mango'];
  constructor(private router:Router,private fb: FormBuilder) { }

  private skillForm = this.fb.group({
    posSearch: ['', Validators.required],

 
  })
  ngOnInit() {
    this.skillForm.valueChanges.subscribe((values: any) => {
      const { posSearch } = values;
      if (posSearch) {
        // tslint:disable-next-line: max-line-length
        this.positions = [...this.selectedPositions, ...positionsData.filter((item: any) => item.name.toLowerCase().includes(posSearch.toLowerCase()) && item.select !== true)];
      } else {
        this.positions = this.selectedPositions;
      }
    });
  }
  next(){
    if(this.skillForm.valid){
    this.router.navigate(['home/availability']);
  }
}
  previous(){
    this.router.navigate(['/home']);
  }
  selectPosition(index) {
    this.positions[index].select = !this.positions[index].select;
    this.positions.sort((a, b) => b.select - a.select);
    this.selectedPositions = this.positions.filter(item => item.select === true);
  }
}
