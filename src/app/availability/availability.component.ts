import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { positionsData } from '../data';
@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {
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

  constructor(private router:Router,private fb: FormBuilder) { }
  private availabilityForm = this.fb.group({
    datepicker1: ['', Validators.required],
    datepicker2:['',Validators.required],
    dailyrate: ['', Validators.required],
    hourlyrate:['',Validators.required],
    place: ['', Validators.required],
    salary:['',Validators.required],
    posSearch:['']
  })

  
  ngOnInit() {
    this.availabilityForm.valueChanges.subscribe((values: any) => {
      const { posSearch } = values;
      if (posSearch) {
        // tslint:disable-next-line: max-line-length
        this.positions = [...this.selectedPositions, ...positionsData.filter((item: any) => item.name.toLowerCase().includes(posSearch.toLowerCase()) && item.select !== true)];
      } else {
        this.positions = this.selectedPositions;
      }
    });
  }
  next() {
    if(this.availabilityForm.valid){
    this.router.navigate(['/home']);
    }
  }
  previous(){
    this.router.navigate(['/home/skills']);
  }
  showDropDown() {
    this.showDropDownFlag = !this.showDropDownFlag;
  }
  selectPosition(index) {
    this.positions[index].select = !this.positions[index].select;
    this.positions.sort((a, b) => b.select - a.select);
    this.selectedPositions = this.positions.filter(item => item.select === true);
  }
}
