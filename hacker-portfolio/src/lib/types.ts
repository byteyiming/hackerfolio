export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
}

export interface Experience {
  title: string;
  company: string;
  date?: string;
  location?: string;
  description?: string;
  technologies?: string[];
}

