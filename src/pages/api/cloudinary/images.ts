import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from './cloudinaryConfig';

export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  format: string;
  bytes: number;
  width: number;
  height: number;
  created_at: string;
  folder?: string;
  tags?: string[];
  context?: Record<string, string>;
}

export interface ImageListResponse {
  images: CloudinaryImage[];
  next_cursor?: string;
  total_count: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ImageListResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      folder,
      max_results = '20',
      next_cursor,
      search,
    } = req.query;

    let expression = 'resource_type:image';
    
    // 如果指定了文件夹
    if (folder && typeof folder === 'string') {
      expression += ` AND folder:${folder}`;
    }
    
    // 如果有搜索关键词
    if (search && typeof search === 'string') {
      expression += ` AND filename:*${search}*`;
    }

    const options: any = {
      expression,
      max_results: parseInt(max_results as string, 10),
      sort_by: [['created_at', 'desc']],
      with_field: ['context', 'tags'],
    };

    if (next_cursor && typeof next_cursor === 'string') {
      options.next_cursor = next_cursor;
    }

    const result = await cloudinary.search.expression(expression)
      .sort_by('created_at', 'desc')
      .max_results(parseInt(max_results as string, 10))
      .with_field('context')
      .with_field('tags')
      .next_cursor(next_cursor as string)
      .execute();

    const response: ImageListResponse = {
      images: result.resources || [],
      total_count: result.total_count || 0,
    };

    if (result.next_cursor) {
      response.next_cursor = result.next_cursor;
    }

    res.status(200).json(response);
  } catch (error) {
    console.error('获取图片列表失败:', error);
    res.status(500).json({ error: '获取图片列表失败' });
  }
}