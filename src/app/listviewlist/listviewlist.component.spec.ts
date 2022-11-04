import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListviewlistComponent } from './listviewlist.component';

describe('ListviewlistComponent', () => {
  let component: ListviewlistComponent;
  let fixture: ComponentFixture<ListviewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListviewlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
