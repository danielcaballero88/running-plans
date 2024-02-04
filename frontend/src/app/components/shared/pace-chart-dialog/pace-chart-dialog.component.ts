import { Component, Inject } from '@angular/core'
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog'

@Component({
  selector: 'app-pace-chart-dialog',
  templateUrl: './pace-chart-dialog.component.html',
  styleUrls: ['./pace-chart-dialog.component.scss'],
})
export class PaceChartDialogButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(PaceChartDialogComponent, {
      data: {},
    })
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.scss'],
})
export class PaceChartDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PaceChartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaceChartDialogButtonComponent,
  ) {}

  closeDialog(): void {
    this.dialogRef.close()
  }
}
