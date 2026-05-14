 
 import {sendContactEmail } from './api/email'

const form = document.querySelector('#contact-form');
const status = document.querySelector('#status');

function getFormData(form) {
  const formData = new FormData(form);

  return {
    name: formData.get('name')?.toString().trim() || '',
    email: formData.get('email')?.toString().trim() || '',
    message: formData.get('message')?.toString().trim() || '',
  };
}

function validate(data) {
  if (!data.name) throw new Error('Name is required');
  if (!data.email) throw new Error('Email is required');
  if (!data.message) throw new Error('Message is required');
}

//Submit button logic
if (!form || !status) {
  console.error('Required elements not found'); 
} 
else {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      const data = getFormData(form);
      validate(data);

      status.textContent = 'Enviado email...';

      const result = await sendContactEmail(data);

      status.textContent = result.message;
      form.reset();
    } catch (error) {
      status.textContent = error.message || 'Unexpected error';
    }
  });
}