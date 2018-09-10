import 'hammerjs';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatExpansionModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatDialogModule,
} from '@angular/material';
@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule
  ],
})
export class MaterialModule {}
