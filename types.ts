
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  icon: React.ReactNode;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface BookingDetails {
  serviceId: string;
  date: Date;
  time: string;
}
