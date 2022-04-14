import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
	declarations: [],
	imports: [
		CommonModule
	],
	exports: [
		MatChipsModule,
		MatProgressBarModule,
		MatSnackBarModule,
		MatButtonModule,
		MatInputModule,
		MatTabsModule,
		MatIconModule,
		MatTreeModule,
		MatTableModule,
		MatDialogModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
		MatSortModule,
		MatFormFieldModule,
		MatSelectModule,
		MatRadioModule,
		MatListModule,
		MatMenuModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatStepperModule,
		MatCardModule,
		MatCheckboxModule,
		MatBadgeModule
	],
	providers: [
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true }
		},
		{
			provide: MAT_RADIO_DEFAULT_OPTIONS,
			useValue: { color: 'accent' },
		}
	]
})
export class MaterialModule { }
