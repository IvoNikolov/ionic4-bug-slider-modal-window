import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderArrayPage } from './slider-array.page';

describe('SliderArrayPage', () => {
  let component: SliderArrayPage;
  let fixture: ComponentFixture<SliderArrayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderArrayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderArrayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
