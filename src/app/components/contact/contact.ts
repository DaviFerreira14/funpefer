import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneArea: '',
    phoneNumber: '',
    topic: '',
    howDidYouFind: '',
    message: ''
  };

  messageCharCount = 0;
  maxMessageLength = 500;

  constructor(private i18nService: I18nService) { }

  get topicOptions() {
    return [
      { value: '', label: this.translate('contact.topicPlaceholder') },
      { value: 'general', label: this.translate('contact.topicGeneral') },
      { value: 'partnership', label: this.translate('contact.topicPartnership') },
      { value: 'donation', label: this.translate('contact.topicDonation') },
      { value: 'volunteer', label: this.translate('contact.topicVolunteer') },
      { value: 'media', label: this.translate('contact.topicMedia') },
      { value: 'other', label: this.translate('contact.topicOther') }
    ];
  }

  get howFoundOptions() {
    return [
      { value: '', label: this.translate('contact.howFound') },
      { value: 'search', label: this.translate('contact.howFoundSearch') },
      { value: 'social', label: this.translate('contact.howFoundSocial') },
      { value: 'referral', label: this.translate('contact.howFoundReferral') },
      { value: 'news', label: this.translate('contact.howFoundNews') },
      { value: 'event', label: this.translate('contact.howFoundEvent') },
      { value: 'other', label: this.translate('contact.howFoundOther') }
    ];
  }

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.formData);
      // Here you would typically send the data to a service
      alert('Mensagem enviada com sucesso!');
      this.resetForm();
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  isFormValid(): boolean {
    return this.formData.firstName.trim() !== '' &&
           this.formData.lastName.trim() !== '' &&
           this.isValidEmail(this.formData.email) &&
           this.formData.topic !== '' &&
           this.formData.message.trim() !== '';
  }

  public isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onMessageChange(): void {
    this.messageCharCount = this.formData.message.length;
  }

  resetForm(): void {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phoneArea: '',
      phoneNumber: '',
      topic: '',
      howDidYouFind: '',
      message: ''
    };
    this.messageCharCount = 0;
  }
}
