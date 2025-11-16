import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { User, Camera, X } from 'lucide-react';
import Image from 'next/image';
import { uploadImgToCloud } from '@/lib/cloudinary';
import styles from './AvatarUpload.module.css';

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  [key: string]: unknown;
}

interface AvatarUploadProps {
  value?: string;
  onChange?: (url: string) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({
  value = '',
  onChange,
  disabled = false,
  size = 'medium'
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [cloudinaryImg, setCloudinaryImg] = useState<CloudinaryImage | null>(null);

  const sizeConfig = {
    small: { width: 40, height: 40 },
    medium: { width: 80, height: 80 },
    large: { width: 120, height: 120 }
  };

  const { width, height } = sizeConfig[size];

  const handleUpload = async (file: File) => {
    try {
      setIsUploading(true);
      const result = await uploadImgToCloud(file);
      
      if (result && result.secure_url) {
        setCloudinaryImg(result);
        onChange?.(result.secure_url);
        message.success('头像上传成功');
      } else {
        message.error('头像上传失败，请重试');
      }
    } catch (error) {
      console.error('Avatar upload error:', error);
      message.error('头像上传失败，请检查网络连接');
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = () => {
    setCloudinaryImg(null);
    onChange?.('');
  };

  const customRequest = async ({ file, onSuccess, onError }: any) => {
    try {
      await handleUpload(file as File);
      onSuccess?.(file);
    } catch (error) {
      onError?.(error);
    }
  };

  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('只能上传图片文件!');
      return false;
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('头像大小不能超过 2MB!');
      return false;
    }

    return true;
  };

  return (
    <div className={`${styles.avatarUpload} ${styles[size]} ${disabled ? styles.disabled : ''}`}>
      <Upload
        name="avatar"
        customRequest={customRequest}
        beforeUpload={beforeUpload}
        showUploadList={false}
        accept="image/*"
        disabled={disabled || isUploading}
      >
        <div 
          className={styles.avatarContainer}
          style={{ width, height }}
        >
          {isUploading ? (
            <div className={styles.uploading}>
              <div className={styles.spinner}></div>
            </div>
          ) : value ? (
            <div className={styles.avatarImageContainer}>
              <Image
                src={value}
                alt="头像"
                width={width}
                height={height}
                className={styles.avatarImage}
              />
              {!disabled && (
                <div className={styles.overlay}>
                  <Camera size={16} className={styles.cameraIcon} />
                </div>
              )}
            </div>
          ) : (
            <div className={styles.placeholder}>
              <User size={size === 'small' ? 16 : size === 'medium' ? 24 : 32} className={styles.placeholderIcon} />
              {!disabled && (
                <div className={styles.uploadHint}>
                  <Camera size={12} className={styles.uploadIcon} />
                </div>
              )}
            </div>
          )}
        </div>
      </Upload>
      
      {value && !disabled && (
        <button
          type="button"
          onClick={handleRemove}
          className={styles.removeButton}
          title="删除头像"
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
};

export default AvatarUpload;