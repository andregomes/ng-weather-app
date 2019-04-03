import { NgModule } from '@angular/core';
import {
  MatAutocomplete,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MAT_LABEL_GLOBAL_OPTIONS,
  MAT_FORM_FIELD_DEFAULT_OPTIONS
} from '@angular/material';


const MATERIAL_MODULES = [
  MatAutocomplete,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' }}, // configure global label
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearence: 'outline' } }
  ]
})
export class MaterialModule {}
