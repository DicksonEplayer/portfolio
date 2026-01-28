
import type { Project, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Customer Churn Prediction',
    description: 'A machine learning model to predict customer churn for a telecom company, helping to proactively retain customers. Built using Python, Scikit-learn, and Pandas.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 2,
    title: 'Sales Dashboard in Power BI',
    description: 'An interactive dashboard visualizing key sales metrics, trends, and performance indicators to drive business decisions. Connected to a live SQL database.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['Power BI', 'SQL', 'Data Visualization', 'DAX'],
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'E-commerce Market Basket Analysis',
    description: 'Uncovered product associations and purchasing patterns from transaction data to optimize product placement and marketing strategies using Apriori algorithm.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['R', 'Data Mining', 'Statistics'],
    sourceUrl: '#',
  },
  {
    id: 4,
    title: 'Real-time Stock Market Analysis',
    description: 'A comprehensive analysis of stock market trends, volatility, and correlation using time-series analysis techniques. Visualized with Matplotlib and Seaborn.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['Python', 'Time Series', 'Matplotlib', 'API'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'The Rise of SQL in Data Science',
    date: 'October 1, 2023',
    author: 'Ainamani Dickson',
    snippet: 'SQL remains a cornerstone of data analysis and data science. In this post, we explore why mastering SQL is more important than ever for aspiring data professionals and how it complements modern data stacks...'
  },
  {
    id: 2,
    title: 'A Guide to Effective Data Storytelling',
    date: 'September 15, 2023',
    author: 'Ainamani Dickson',
    snippet: 'Data is powerful, but its true value is unlocked when it tells a compelling story. Learn the key principles of data storytelling, from choosing the right visualizations to crafting a narrative that resonates with your audience...'
  },
  {
    id: 3,
    title: '5 Common Pitfalls in Statistical Analysis (and How to Avoid Them)',
    date: 'August 28, 2023',
    author: 'Ainamani Dickson',
    snippet: 'Statistical analysis can be tricky. This article covers five common mistakes that can lead to flawed conclusions, such as p-hacking and misinterpreting correlation, and provides practical advice on how to maintain analytical rigor...'
  },
];
