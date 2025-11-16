import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from './cloudinaryConfig';

interface UpdateImageRequest {
  public_id: string;
  tags?: string[];
  context?: Record<string, string>;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { public_id, tags, context }: UpdateImageRequest = req.body;

    if (!public_id) {
      return res.status(400).json({ error: 'public_id is required' });
    }

    const updateOptions: any = {};

    if (tags) {
      updateOptions.tags = tags;
    }

    if (context) {
      updateOptions.context = context;
    }

    const result = await cloudinary.uploader.explicit(public_id, {
      type: 'upload',
      ...updateOptions,
    });

    res.status(200).json({ 
      success: true, 
      public_id: result.public_id,
      tags: result.tags,
      context: result.context 
    });
  } catch (error) {
    console.error('更新图片元数据失败:', error);
    res.status(500).json({ error: '更新图片元数据失败' });
  }
}