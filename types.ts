
export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export interface WeddingEvent {
  type: 'Ceremony' | 'Reception';
  name: string;
  timeRange: string;
  location: string;
  address: string;
  description?: string;
  imageUrl: string;
  icon: string;
}

export interface RSVPData {
  fullName: string;
  attending: 'joyful' | 'regret' | null;
  guestCount: number;
  dietary: string;
  message: string;
}
