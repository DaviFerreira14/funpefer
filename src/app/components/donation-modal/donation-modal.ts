import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-donation-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donation-modal.html',
  styleUrls: ['./donation-modal.css']
})
export class DonationModalComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  constructor(private i18nService: I18nService) {}

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  closeModal(): void {
    this.isVisible = false;
    this.close.emit();
  }
}