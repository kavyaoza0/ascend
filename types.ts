
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  longDescription?: string;
  techStack?: string[];
  challenge?: string;
  solution?: string;
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  features: string[];
  description: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
