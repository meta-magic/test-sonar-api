import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, FormControl } from '@angular/forms';
import { IconLoaderService } from '../services/icon.service';
import { MyAmexioButtonComponent } from './../buttons/button.component';
import { MyAmexioEmailInputComponent } from './emailinput.component';
import { MyAmexioInputHelperComponent } from '../base/input.helper.component';
import { MyCommonIconComponent } from '../base/components/common.icon.component';

describe('my-amexio-email-input', () => {
  let comp: MyAmexioEmailInputComponent;
  let fixture: ComponentFixture<MyAmexioEmailInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [MyAmexioEmailInputComponent,
        MyCommonIconComponent,
        MyAmexioButtonComponent,
        MyAmexioInputHelperComponent],

      providers: [IconLoaderService],
    });
    fixture = TestBed.createComponent(MyAmexioEmailInputComponent);
    comp = fixture.componentInstance;

    comp._pattern = '/\S+@\S+\.\S+/';
    comp.name = 'EmailID';
    comp.fieldlabel = 'email';

    fixture.detectChanges();
  });

  it('ngOnInit() : generateName & createCompId', () => {

    spyOn(comp, 'generateName');
    spyOn(comp, 'createCompId');

    comp.generateName(comp.name, comp.fieldlabel,'emailinput');
    comp.createCompId('emailinput', comp.name);

    expect(comp.name).toEqual('EmailID');
    expect(comp.fieldlabel).toEqual('email');
    expect(comp.generateName).toHaveBeenCalledWith(comp.name, comp.fieldlabel, 'emailinput');
    expect(comp.createCompId).toHaveBeenCalledWith('emailinput', comp.name);

    expect(comp.componentId).toEqual('emailinput_EmailID');
  });

  it('pattern setter test', async(() => {
    comp.pattern = '/\S+@\S+\.\S+/';
    expect(comp._pattern).toBe('/\S+@\S+\.\S+/');
  }));

  it('setPattern() : ', () => {
    comp.value = '/\S+@\S+\.\S+/';
    comp.regEx = new RegExp('/\S+@\S+\.\S+/');

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
