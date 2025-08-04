# 📸 占位图片使用指南

## 🚨 问题说明

使用 `placehold.co` 生成带中文字符的占位图片时，会显示问号❓，这是因为该服务不支持中文字符编码。

## ✅ 解决方案

### 1. **当前修复** (已完成)
将所有中文字符替换为英文缩写：

| 原中文 | 修复后 | 说明 |
|--------|--------|------|
| `投` | `INVEST` | 开源社投 |
| `夏` | `SUMMER` | 开源之夏 |
| `指` | `GUIDE` | 开源指南 |
| `书` | `BOOK` | 开源电子书 |
| `十周年` | `10th+Anniversary` | 十周年庆典 |
| `2024报告` | `2024+Report` | 年度报告 |
| `开源之夏` | `Summer+OSS` | 开源之夏活动 |

### 2. **更好的长期解决方案**

#### 🔧 方案A: 使用支持中文的占位图服务

```javascript
// 推荐使用的替代服务
const placeholderServices = [
  'https://via.placeholder.com/64x64/6E54FF/FFFFFF?text=KYS',
  'https://fakeimg.pl/64x64/6E54FF/FFFFFF/?text=KYS',
  'https://picsum.photos/64/64', // 随机图片
];
```

#### 🎨 方案B: 使用 SVG 图标占位符

创建本地 SVG 图标：

```jsx
// 项目图标组件
const ProjectIcon = ({ type, color = '#6E54FF' }) => {
  const icons = {
    website: (
      <svg viewBox="0 0 24 24" fill={color}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    ),
    community: (
      <svg viewBox="0 0 24 24" fill={color}>
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2z"/>
      </svg>
    ),
    // ... 更多图标
  };
  
  return <div className="project-icon">{icons[type]}</div>;
};
```

#### 🏠 方案C: 使用本地图片

在 `static/img/projects/` 目录下存放实际项目图片：

```javascript
const projects = [
  {
    name: '开源社官网',
    imageUrl: '/img/projects/kaiyuanshe-logo.png', // 本地图片
    // ...
  },
];
```

### 3. **创建自定义占位符组件**

```jsx
// src/components/ProjectAvatar/index.tsx
import React from 'react';
import styles from './styles.module.css';

interface ProjectAvatarProps {
  name: string;
  category: string;
  color?: string;
}

export default function ProjectAvatar({ 
  name, 
  category, 
  color = '#6E54FF' 
}: ProjectAvatarProps) {
  // 取项目名称首字母
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  
  return (
    <div 
      className={styles.avatar}
      style={{ backgroundColor: color }}
    >
      <span className={styles.initials}>{initials}</span>
      <span className={styles.category}>{category}</span>
    </div>
  );
}
```

### 4. **对应的 CSS 样式**

```css
/* src/components/ProjectAvatar/styles.module.css */
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  position: relative;
  overflow: hidden;
}

.initials {
  font-size: 1.2rem;
  line-height: 1;
}

.category {
  font-size: 0.6rem;
  opacity: 0.8;
  margin-top: 2px;
}

.avatar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 100%);
}
```

### 5. **实际应用示例**

```jsx
// 使用自定义组件替换占位图片
{projects.map((project, idx) => (
  <div key={idx} className="project-card">
    <ProjectAvatar 
      name={project.name}
      category={project.category}
      color={project.color}
    />
    <h3>{project.name}</h3>
    <p>{project.description}</p>
  </div>
))}
```

## 🎯 推荐实施步骤

1. **短期** (当前已完成): 修复中文字符问题 ✅
2. **中期**: 实施自定义 ProjectAvatar 组件
3. **长期**: 收集并使用真实的项目 Logo 图片

## 📝 最佳实践

1. **避免使用中文字符**: 在任何外部服务的URL参数中
2. **本地化图片**: 重要项目使用真实Logo
3. **渐进式升级**: 从占位图→自定义组件→真实图片
4. **响应式考虑**: 确保不同尺寸下的显示效果
5. **性能优化**: 本地图片记得压缩优化

---

**状态**: ✅ **问题已修复** - 所有中文字符占位图已更新为英文版本