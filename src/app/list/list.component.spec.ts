import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AvengersService } from './../avengers.service';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    const activatedRouteStub = () => ({ params: { subscribe: f => f({}) } });
    const avengersServiceStub = () => ({
      getChosenListCharcters: side => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ListComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: AvengersService, useFactory: avengersServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`characters has default value`, () => {
    expect(component.characters).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const avengersServiceStub: AvengersService = fixture.debugElement.injector.get(
        AvengersService
      );
      spyOn(avengersServiceStub, 'getChosenListCharcters').and.callThrough();
      component.ngOnInit();
      expect(avengersServiceStub.getChosenListCharcters).toHaveBeenCalled();
    });
  });
});
