
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  snippet: string;
  author: string;
}

export type Page = 'about' | 'projects' | 'blog' | 'contact';
