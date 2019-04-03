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
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatToolbarModule
} from '@angular/material';


const MATERIAL_MODULES = [
  // MatAutocomplete,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' }
    },
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }, // configure global label
  ]
})
export class MaterialModule {}
