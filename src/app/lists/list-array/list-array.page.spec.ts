import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListArrayPage } from './list-array.page';

describe('ListArrayPage', () => {
  let component: ListArrayPage;
  let fixture: ComponentFixture<ListArrayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArrayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListArrayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
