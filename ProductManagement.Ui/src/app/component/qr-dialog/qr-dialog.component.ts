import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-dialog',
  standalone: true,
  imports: [CommonModule, QRCodeComponent],
  templateUrl: './qr-dialog.component.html',
  styleUrls: ['./qr-dialog.component.css']
})
export class QrDialogComponent {

  @Input() value = ''; 
  @Input() visible = false;

  @Output() close = new EventEmitter<void>();
  
  onClose() {
    this.close.emit();
  }
}
