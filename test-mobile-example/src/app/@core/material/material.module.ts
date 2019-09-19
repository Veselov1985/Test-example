import {NgModule} from "@angular/core";
import {
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule, MatCardModule, MatSnackBarModule,
} from "@angular/material";
import {CommonModule} from "@angular/common";

const  MATERIAL_MODULES = [
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports: [MATERIAL_MODULES]
})

export class MaterialModule{}
