import { post } from './client';
import type { contactForm } from '../types/contact-form';

export interface ContactResponse {
  success: boolean;
  message: string;
}

export function sendContactEmail(data: contactForm) {
  return post<contactForm, ContactResponse>('/api/contact', data);
}