import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsformComponent } from './userdetailsform.component';

describe('UserdetailsformComponent', () => {
  let component: UserdetailsformComponent;
  let fixture: ComponentFixture<UserdetailsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
