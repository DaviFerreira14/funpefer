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
  
  copyMessage: string = '';
  pixKey: string = '00.854.769/0001-77';

  constructor(private i18nService: I18nService) {
    this.copyMessage = this.translate('donate.modal.copyButton');
  }

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  closeModal(): void {
    this.isVisible = false;
    this.close.emit();
  }

  copyPixKey(): void {
    navigator.clipboard.writeText(this.pixKey).then(() => {
      this.copyMessage = this.translate('donate.modal.copied');
      setTimeout(() => {
        this.copyMessage = this.translate('donate.modal.copyButton');
      }, 2000);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = this.pixKey;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      this.copyMessage = this.translate('donate.modal.copied');
      setTimeout(() => {
        this.copyMessage = this.translate('donate.modal.copyButton');
      }, 2000);
    });
  }
}