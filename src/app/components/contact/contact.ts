import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { Subscription } from 'rxjs';
import emailjs from '@emailjs/browser';

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

  // Modal state
  isConfirmModalVisible = false;
  confirmStatus: 'sending' | 'success' | 'error' = 'sending';
  confirmMessage = '';

  // EmailJS configuration (prod)
  private EMAILJS_PUBLIC_KEY = 'QOG2An5SdnmIPF7En';
  private EMAILJS_SERVICE_ID = 'service_ei46cas';
  private EMAILJS_TEMPLATE_ID = 'template_pp8wabe';

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

    // Initialize EmailJS
    emailjs.init(this.EMAILJS_PUBLIC_KEY);
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
    if (!this.isFormValid()) {
      this.showConfirm('error', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    this.showConfirm('sending', 'Enviando sua mensagem...');

    const templateParams = {
      to_email: 'contato@funpefer.org',
      from_name: `${this.formData.firstName} ${this.formData.lastName}`.trim(),
      from_email: this.formData.email,
      phone: `${this.formData.phoneArea || ''} ${this.formData.phoneNumber || ''}`.trim(),
      topic: this.formData.topic,
      how_found: this.formData.howDidYouFind,
      message: this.formData.message,
      locale: this.currentLanguage
    };

    emailjs.send(this.EMAILJS_SERVICE_ID, this.EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => {
        this.showConfirm('success', 'Mensagem enviada com sucesso!');
        this.resetForm();
      })
      .catch((err) => {
        console.error('EmailJS error', err);
        this.showConfirm('error', 'Ocorreu um erro ao enviar. Tente novamente mais tarde.');
      });
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

  showConfirm(status: 'sending' | 'success' | 'error', message: string) {
    this.confirmStatus = status;
    this.confirmMessage = message;
    this.isConfirmModalVisible = true;
  }

  closeConfirmModal() {
    this.isConfirmModalVisible = false;
  }
}
