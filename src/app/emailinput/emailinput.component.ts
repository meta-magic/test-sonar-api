/*
* Copyright [2019] [Metamagic]
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel, Validators } from '@angular/forms';
import { BaseInputEventComponent } from '../base/base.inputevent.component';

@Component({
  selector: 'my-amexio-email-input',
  templateUrl: './emailinput.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MyAmexioEmailInputComponent), multi: true,
  }, {
    provide: NG_VALIDATORS, useExisting: forwardRef(() => MyAmexioEmailInputComponent), multi: true,
  }],
})
export class MyAmexioEmailInputComponent  extends BaseInputEventComponent implements OnInit, Validators {

  /*
   Properties
   name : field-label
   datatype : string
   version : 4.0 onwards
   default :
   description : The label of this field
   */
  @Input('field-label') fieldlabel: string;
  /*
   Properties
   name : has-label
   datatype : boolean
   version : 4.0 onwards
   default : false
   description : Flag to set label
   */
  @Input('has-label') hasLabel = true;
  /*
   Properties
   name : allow-blank
   datatype : string
   version : 4.0 onwards
   default :
   description : Sets if field is required
   */
  @Input('allow-blank') allowblank: boolean;
  @ViewChild(NgModel, {static: true}) model: NgModel;

  regEx: RegExp;

  showToolTip: boolean;

  @Input('place-holder') placeholder: string;
  /*
   Properties
   name : disabled
   datatype : boolean
   version : 4.0 onwards
   default : false
   description : True to disable the field.
   */
  @Input() disabled: boolean;
  /*
   Properties
   name : icon-feedback
   datatype : boolean
   version : 4.0 onwards
   default : false
   description :
   */
  @Input('icon-feedback') iconfeedback: boolean;
  /*
   Properties
   name : font-style
   datatype : string
   version : 4.0 onwards
   default :
   description : Set font-style to field
   */
  @Input('font-style') fontstyle: string;
  /*
   Properties
   name : font-family
   datatype : string
   version : 4.0 onwards
   default :
   description : Set font-family to field
   */
  @Input('font-family') fontfamily: string;
  /*
   Properties
   name : font-size
   datatype : string
   version : 4.0 onwards
   default :
   description : Set font-size to field
   */
  @Input('font-size') fontsize: string;

  /*
Properties
name : error-msg
datatype : string
version : 4.0 onwards
default :
description : Sets the error message for validation
*/
  @Input('error-msg') errormsg: string;
  /*
   Properties
   name : pattern
   datatype : string
   version : 4.0 onwards
   default :
   description : Apply Reg-ex to the field
   */
  _pattern: string;

  get pattern(): string {
    return this._pattern;
  }

  @Input('pattern')
  set pattern(value: string) {
    if (value != null) {
      this._pattern = value;
      this.regEx = new RegExp(this._pattern);
    }
  }
  /*
   Properties
   name : enable-popover
   datatype : string
   version : 4.0 onwards
   default :
   description : Set enable / disable popover.
   */
  @Input('enable-popover') enablepopover: boolean;
  /*
   Events
   name : onBlur
   datatype : any
   version : 4.0 onwards
   default :
   description : On blur event
   */
  componentId: any;
  isValid: boolean;
  @Input('name') name: string;
  constructor() {
    super();
    this.showToolTip = false;
  }

  ngOnInit() {
    this.name = this.generateName(this.name, this.fieldlabel, 'emailinput');
    this.componentId = this.createCompId('emailinput', this.name);
  }


  public validate() {
    return this.isEmailFieldValid() ? null : {
      jsonParseError: {
        valid: true,
      },
    };
  }

}
