const CLOUDINARY_UPLOAD = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
const CLOUDINARY_DELETE = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/destroy`;

/**
 * 上传图片到 Cloudinary
 * @param file - 要上传的图片文件
 * @returns
 */
async function uploadImgToCloud(file: File) {
  // 获取签名
  const signResponse = await fetch('/api/cloudinary/cloudinary-sign');
  const { signature, timestamp } = await signResponse.json();

  const formData = new FormData();
  formData.append('file', file);
  formData.append('timestamp', timestamp);
  formData.append('signature', signature);
  formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '');
  formData.append(
    'folder',
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_FOLDERS || 'images'
  );

  try {
    const response = await fetch(CLOUDINARY_UPLOAD, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.secure_url) {
      return Promise.resolve(result); // 返回包含图片信息的对象
    } else {
      return Promise.reject(false);
    }
  } catch (error) {
    console.error('图片上传错误：', error);
    return Promise.reject(false);
  }
}

/**
 * 删除coludinary上的图片
 */
async function deleteImgFromCloud(publicId: string): Promise<boolean> {
  try {
    // 获取签名
    const signResponse = await fetch(
      '/api/cloudinary/cloudinary-sign-destroy',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ publicId }),
      }
    );
    const {
      signature,
      timestamp,
    }: {
      signature: string;
      timestamp: number;
    } = await signResponse.json();

    // 调用 Destroy API - 使用 form-urlencoded 格式
    const formData = new URLSearchParams();
    formData.append('invalidate', 'true');
    formData.append('public_id', publicId);
    formData.append('timestamp', timestamp.toString());
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '');
    formData.append('signature', signature);

    const response = await fetch(CLOUDINARY_DELETE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });

    const data: {
      result?: string;
      error?: string;
    } = await response.json();
    
    console.log('Cloudinary 删除响应:', { 
      status: response.status, 
      statusText: response.statusText,
      data,
      publicId: publicId
    });

    if (response.ok && data.result === 'ok') {
      return true;
    } else {
      throw new Error(data.error || `删除失败: ${data.result || 'unknown error'}`);
    }
  } catch (error) {
    console.log('图片上传错误：', error);

    return false;
  }
}

export { uploadImgToCloud, deleteImgFromCloud };
