import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent implements OnInit, OnDestroy {
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

  currentLanguage = 'pt';
  topicOptions: { value: string; label: string }[] = [];
  howFoundOptions: { value: string; label: string }[] = [];
  private langSub?: Subscription;

  constructor(private i18nService: I18nService) { }

  ngOnInit() {
    this.currentLanguage = this.i18nService.getCurrentLanguage();
    this.buildTopicOptions();
    this.buildHowFoundOptions();
    this.langSub = this.i18nService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      this.buildTopicOptions();
      this.buildHowFoundOptions();
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }

  private buildTopicOptions() {
    this.topicOptions = [
      { value: '', label: this.translate('contact.topic.select') },
      { value: 'general', label: this.translate('contact.topic.general') },
      { value: 'donation', label: this.translate('contact.topic.donation') },
      { value: 'volunteer', label: this.translate('contact.topic.volunteer') },
      { value: 'partnerships', label: this.translate('contact.topic.partnerships') },
      { value: 'events', label: this.translate('contact.topic.events') },
      { value: 'others', label: this.translate('contact.topic.others') }
    ];
  }

  private buildHowFoundOptions() {
    this.howFoundOptions = [
      { value: '', label: this.translate('contact.howFound.select') },
      { value: 'google', label: this.translate('contact.howFound.google') },
      { value: 'facebook', label: this.translate('contact.howFound.facebook') },
      { value: 'instagram', label: this.translate('contact.howFound.instagram') },
      { value: 'friends', label: this.translate('contact.howFound.friends') },
      { value: 'events', label: this.translate('contact.howFound.events') },
      { value: 'others', label: this.translate('contact.howFound.others') }
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
