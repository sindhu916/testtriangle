import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 

  constructor(private router:Router,private fb: FormBuilder) { }
  private aboutForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname:['',Validators.required],
    phone: ['', Validators.required],
    email:['',Validators.required],
    jobtitle: ['', Validators.required],
    currentcompany:['',Validators.required],
    experience: ['', Validators.required],
    portfolio:['',Validators.required],
  })
 
  ngOnInit() {
  }
  
  next(){  
    if(this.aboutForm.valid){
      console.log("this.boutForm.value")
    this.router.navigate(['/home/skills']);
    }
  }
  previous(){
    this.router.navigate(['/home']);
  }
}
