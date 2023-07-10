import { nanoid } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Article {
  id?: string;
  title: string;
  description: string;
  images: string;
  date: string;
  category: string;
  link: string;
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sampleArticle: Article = {
    title: 'We’re working on a possible revised concessions system',
    description:
      'Speaking to Catalunya Radio, Dorna Sports’ Chief Sporting Officer reveals 2024 plans for Concessions and more',
    images:
      'https://www.motogp.com/en/in%20the%20media/2023/06/29/we-re-working-on-a-possible-revised-concessions-system/459500',
    date: '2023-05-14',
    category: 'MOTOGP',
    link: 'https://www.motogp.com/en/in%20the%20media/2023/06/29/we-re-working-on-a-possible-revised-concessions-system/459500',
  };
  const articles: Article[] = [sampleArticle, sampleArticle, sampleArticle, sampleArticle];
  const generateIds = (items: Article[]): Article[] => {
    const uniqueItems: Article[] = [];

    items.forEach((item) => {
      const newItem: Article = {
        ...item,
        id: nanoid(),
      };

      uniqueItems.push(newItem);
    });

    return uniqueItems;
  };

  if (req.method === 'GET') {
    res.status(200).json(generateIds(articles));
  } else if (req.method === 'POST') {
    // Process the POST request
    res.status(200).json({ message: 'POST request processed successfully' });
  } else {
    res.status(405).json({ message: '405 Method Not Allowed' });
  }
}
