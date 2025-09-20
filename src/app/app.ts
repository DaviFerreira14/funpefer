import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { DonationModalComponent } from './components/donation-modal/donation-modal';
import { WhatsappFloatComponent } from './components/whatsapp-float/whatsapp-float.component';
import { I18nService } from './services/i18n.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, DonationModalComponent, WhatsappFloatComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'funpefer';
  isDonationModalVisible = false;

  constructor(private i18nService: I18nService) {}

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  openDonationModal(): void {
    this.isDonationModalVisible = true;
  }

  closeDonationModal(): void {
    this.isDonationModalVisible = false;
  }
}
