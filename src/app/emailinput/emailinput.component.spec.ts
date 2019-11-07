import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, FormControl } from '@angular/forms';
import { IconLoaderService } from '../services/icon.service';
import { AmexioButtonComponent } from './../buttons/button.component';
import { AmexioEmailInputComponent } from './emailinput.component';
import { AmexioInputHelperComponent } from '../base/input.helper.component';
import { CommonIconComponent } from '../base/components/common.icon.component';

describe('amexio-email-input', () => {
  let comp: AmexioEmailInputComponent;
  let fixture: ComponentFixture<AmexioEmailInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AmexioEmailInputComponent, CommonIconComponent, AmexioButtonComponent, AmexioInputHelperComponent],

      providers: [IconLoaderService],
    });
    fixture = TestBed.createComponent(AmexioEmailInputComponent);
    comp = fixture.componentInstance;

    comp.pattern = '/\S+@\S+\.\S+/';
    comp.name = 'Email';
    comp.fieldlabel = 'email';
  });

  it('ngOnInit() : ', () => {

    fixture.detectChanges();
    expect(comp.name).toEqual('Email');
    expect(comp.fieldlabel).toEqual('email');
    expect(comp.componentId).toEqual('emailinput_Email');
  });


  it('getPattern() : ', () => {
    fixture.detectChanges();
    expect(comp.pattern).toEqual('/\S+@\S+\.\S+/');
  });

  it('setPattern() : ', () => {
    fixture.detectChanges();
    comp.value = null;
    expect(comp.value).toBeNull();
  });

  it('setPattern() : ', () => {
    fixture.detectChanges();
    comp.value = '/\S+@\S+\.\S+/';
    expect(comp.pattern).toEqual(comp.value);
    expect(comp.regEx).toBeDefined();
    expect(comp.regEx).toEqual(new RegExp(comp.value));
  });

  it( 'validate() :', () => {
    spyOn(comp, 'isEmailFieldValid');
    comp.isEmailFieldValid();
    expect(comp.isEmailFieldValid).toHaveBeenCalled();
  });

});
