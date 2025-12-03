import {
  ChevronDown,
  Menu as MenuIcon,
  User,
  LogOut
} from 'lucide-react'

import { Avatar } from 'antd'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { signOut } from 'next-auth/react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/router'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from '../hooks/useTranslation'
import { mainNavItems, type MenuItem } from '../data/navigation'
import styles from './Header.module.css'


interface SearchResult {
  item: MenuItem & { label: string; description?: string }
  parentLabel?: string
  matchType: 'label' | 'description'
  score: number
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // 获取用户认证状态和翻译函数
  const { session, isAuthenticated, isLoading } = useAuth()
  const { t } = useTranslation()

  // 将导航数据转换为包含翻译的格式
  const translatedNavItems = useMemo(() => {
    const translateMenuItem = (item: MenuItem) => ({
      ...item,
      label: t(item.labelKey),
      description: item.descriptionKey ? t(item.descriptionKey) : undefined,
      children: item.children?.map(translateMenuItem)
    })
    
    return mainNavItems.map(translateMenuItem)
  }, [t])

  // 模糊搜索算法
  const fuzzySearch = (query: string, text: string): number => {
    if (!query || !text) return 0

    const queryLower = query.toLowerCase()
    const textLower = text.toLowerCase()

    // 完全匹配得分最高
    if (textLower.includes(queryLower)) {
      const exactMatch = textLower === queryLower
      const startsWith = textLower.startsWith(queryLower)
      return exactMatch ? 100 : startsWith ? 90 : 80
    }

    // 模糊匹配算法
    let score = 0
    let queryIndex = 0

    for (
      let i = 0;
      i < textLower.length && queryIndex < queryLower.length;
      i++
    ) {
      if (textLower[i] === queryLower[queryIndex]) {
        score += 1
        queryIndex++
      }
    }

    // 如果所有查询字符都匹配，计算匹配度
    if (queryIndex === queryLower.length) {
      return Math.round((score / textLower.length) * 60) // 最高60分
    }

    return 0
  }

  // 扁平化菜单项并搜索 (目前已注释，保留逻辑以备后用)
  // const searchResults = useMemo(() => {
  //   if (!searchQuery.trim()) return []

  //   const results: SearchResult[] = []

  //   const searchInItems = (items: (MenuItem & { label: string; description?: string })[], parentLabel?: string) => {
  //     items.forEach(item => {
  //       // 搜索标签
  //       const labelScore = fuzzySearch(searchQuery, item.label)
  //       if (labelScore > 0) {
  //         results.push({
  //           item,
  //           parentLabel,
  //           matchType: 'label',
  //           score: labelScore
  //         })
  //       }

  //       // 搜索描述
  //       if (item.description) {
  //         const descScore = fuzzySearch(searchQuery, item.description)
  //         if (descScore > 0) {
  //           results.push({
  //             item,
  //             parentLabel,
  //             matchType: 'description',
  //             score: descScore * 0.8 // 描述匹配权重略低
  //           })
  //         }
  //       }

  //       // 递归搜索子菜单
  //       if (item.children) {
  //         searchInItems(item.children, item.label)
  //       }
  //     })
  //   }

  //   searchInItems(translatedNavItems)

  //   // 按分数排序，去重
  //   const uniqueResults = results.reduce((acc, current) => {
  //     const existing = acc.find(r => r.item.key === current.item.key)
  //     if (!existing || existing.score < current.score) {
  //       return [...acc.filter(r => r.item.key !== current.item.key), current]
  //     }
  //     return acc
  //   }, [] as SearchResult[])

  //   return uniqueResults.sort((a, b) => b.score - a.score).slice(0, 8) // 最多显示8个结果
  // }, [searchQuery, translatedNavItems])

  // 处理下拉菜单鼠标事件
  const handleMouseEnter = useCallback((key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setActiveDropdown(key)
  }, [])

  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200) // 200ms 延迟，给用户更多时间移动到浮窗
  }, [])

  // 清理定时器
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  // 处理搜索框聚焦
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  // 点击外部关闭搜索
  useEffect(() => {
    const handleClickOutside = () => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.closest(`.${styles.searchContainer}`)
      ) {
        setSearchOpen(false)
        setSearchQuery('')
      }
    }

    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchOpen])

  // 点击外部关闭用户菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false)
      }
    }

    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [userMenuOpen])

  // 处理退出登录
  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: '/' })
    } catch (error) {
      console.error('退出登录失败:', error)
    }
  }

  // 处理联系我们点击 - 跳转到about页面并滚动到底部
  const handleContactClick = async (e: React.MouseEvent) => {
    e.preventDefault()

    if (router.pathname === '/about') {
      // 如果已经在about页面，直接滚动到底部
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      })
    } else {
      // 如果不在about页面，先跳转
      await router.push('/about')
      // 延迟滚动，确保页面已加载
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        })
      }, 100)
    }
  }

  // const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value)
  //   setSearchQuery(e.target.value)
  //   router.push('/blogs?keyword=' + e.target.value)
  // }, [router])

  // CNCF风格下拉菜单组件
  const NavDropdown = ({ item }: { item: MenuItem & { label: string; description?: string; children?: (MenuItem & { label: string; description?: string })[] } }) => {
    const isActive = activeDropdown === item.key

    return (
      <div
        className={styles.navDropdownContainer}
        onMouseEnter={() => handleMouseEnter(item.key)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={`${styles.navIcon} ${isActive ? styles.navIconActive : ''}`}
          />
        </div>

        {isActive && item.children && (
          <div
            className={styles.navDropdownMenu}
            onMouseEnter={() => handleMouseEnter(item.key)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.dropdownLayout}>
              {/* 左侧菜单列表 */}
              <div
                className={
                  item.key === 'about' ||
                  item.key === 'governance' ||
                  item.key === 'community-development' ||
                  item.key === 'events' ||
                  item.key === 'projects' ||
                  item.key === 'articles-media'
                    ? styles.dropdownLeftTwoColumn
                    : styles.dropdownLeft
                }
              >
                {item.key === 'about' ? (
                  // 关于我们的特殊两列布局
                  <>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'basic')
                        .map(child =>
                          child.key === 'contact' ? (
                            <a
                              key={child.key}
                              href={child.href || '/about'}
                              className={styles.navDropdownItem}
                              onClick={e => {
                                setActiveDropdown(null)
                                handleContactClick(e)
                              }}
                            >
                              <div className={styles.dropdownItemContent}>
                                <span className={styles.dropdownItemTitle}>
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className={styles.dropdownItemDesc}>
                                    {child.description}
                                  </span>
                                )}
                              </div>
                            </a>
                          ) : (
                            <Link
                              key={child.key}
                              href={child.href || '/'}
                              className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                              onClick={() => setActiveDropdown(null)}
                              target={child.target}
                            >
                              <div className={styles.dropdownItemContent}>
                                <span className={styles.dropdownItemTitle}>
                                  {child.label}
                                  {child.hot && (
                                    <span className={styles.hotIndicator}>
                                      Hot
                                    </span>
                                  )}
                                </span>
                                {child.description && (
                                  <span className={styles.dropdownItemDesc}>
                                    {child.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          )
                        )}
                    </div>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'brand')
                        .map(child => (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            target={child.target}
                          >
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {child.label}
                                {child.hot && (
                                  <span className={styles.hotIndicator}>
                                    Hot
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className={styles.dropdownItemDesc}>
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                    </div>
                  </>
                ) : item.key === 'governance' ? (
                  // 社区治理的特殊两列布局
                  <>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'basic')
                        .map(child => (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            target={child.target}
                          >
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {child.label}
                                {child.hot && (
                                  <span className={styles.hotIndicator}>
                                    Hot
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className={styles.dropdownItemDesc}>
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                    </div>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'policies')
                        .map(child => (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            target={child.target}
                          >
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {child.label}
                                {child.hot && (
                                  <span className={styles.hotIndicator}>
                                    Hot
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className={styles.dropdownItemDesc}>
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                    </div>
                  </>
                ) : item.key === 'community-development' ? (
                  // 社区发展的特殊三列布局
                  <>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'recognition')
                        .map(child => (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            target={child.target}
                          >
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {child.label}
                                {child.hot && (
                                  <span className={styles.hotIndicator}>
                                    Hot
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className={styles.dropdownItemDesc}>
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                    </div>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'cooperation')
                        .map(child => (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            target={child.target}
                          >
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {child.label}
                                {child.hot && (
                                  <span className={styles.hotIndicator}>
                                    Hot
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className={styles.dropdownItemDesc}>
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                    </div>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'reports')
                        .map(child => (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            target={child.target}
                          >
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {child.label}
                                {child.hot && (
                                  <span className={styles.hotIndicator}>
                                    Hot
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className={styles.dropdownItemDesc}>
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                    </div>
                  </>
                ) : item.key === 'events' ? (
                  // 开源活动的特殊两列布局
                  <>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'annual')
                        .map(child => (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            target={child.target}
                          >
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {child.label}
                                {child.hot && (
                                  <span className={styles.hotIndicator}>
                                    Hot
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className={styles.dropdownItemDesc}>
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                    </div>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'calendar')
                        .map(child => (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            target={child.target}
                          >
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {child.label}
                                {child.hot && (
                                  <span className={styles.hotIndicator}>
                                    Hot
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className={styles.dropdownItemDesc}>
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                    </div>
                  </>
                ) : item.key === 'projects' ? (
                  // 开源项目的特殊两列布局
                  <>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'main')
                        .map(child => (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            target={child.target}
                          >
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {child.label}
                                {child.hot && (
                                  <span className={styles.hotIndicator}>
                                    Hot
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className={styles.dropdownItemDesc}>
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                    </div>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'tech')
                        .map(child => (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            target={child.target}
                          >
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {child.label}
                                {child.hot && (
                                  <span className={styles.hotIndicator}>
                                    Hot
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className={styles.dropdownItemDesc}>
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                    </div>
                  </>
                ) : item.key === 'articles-media' ? (
                  // 文章&媒体的特殊两列布局
                  <>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'content')
                        .map(child => (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            target={child.target}
                          >
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {child.label}
                                {child.hot && (
                                  <span className={styles.hotIndicator}>
                                    Hot
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className={styles.dropdownItemDesc}>
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                    </div>
                    <div className={styles.aboutColumn}>
                      {item.children
                        ?.filter(child => child.group === 'brand')
                        .map(child => (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            target={child.target}
                          >
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {child.label}
                                {child.hot && (
                                  <span className={styles.hotIndicator}>
                                    Hot
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className={styles.dropdownItemDesc}>
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                    </div>
                  </>
                ) : (
                  // 其他菜单的正常布局
                  item.children?.map(child => (
                    <Link
                      key={child.key}
                      href={child.href || '/'}
                      className={`${styles.navDropdownItem} ${child.hot ? styles.navDropdownItemHot : ''}`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className={styles.dropdownItemContent}>
                        <span className={styles.dropdownItemTitle}>
                          {child.label}
                          {child.hot && (
                            <span className={styles.hotIndicator}>Hot</span>
                          )}
                        </span>
                        {child.description && (
                          <span className={styles.dropdownItemDesc}>
                            {child.description}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* 主导航栏 */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          {/* Logo 区域 */}
          <Link href="/" className={styles.logoContainer}>
            <Image
              src="/logo_2.svg"
              alt="开源社 Logo"
              width={100}
              height={100}
              className={styles.logoImage}
            />
          </Link>

          {/* 桌面导航菜单 */}
          <nav className={styles.nav}>
            {translatedNavItems.map(item => (
              <NavDropdown key={item.key} item={item} />
            ))}
          </nav>

          {/* 右侧操作区 */}
          <div className={styles.headerActions}>
            {/* 加入我们按钮 */}
            <Link href="#" className={styles.joinUsButton}>
              加入我们
            </Link>

            {/* 语言切换器 */}
            <LanguageSwitcher />

            {/* 用户认证区域 */}
            {isLoading ? (
              <div className={styles.loginButton}>加载中...</div>
            ) : isAuthenticated && session?.user ? (
              <div className={styles.userMenu} ref={userMenuRef}>
                <div
                  className={styles.userContainer}
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  aria-label="用户菜单"
                >
                  {session.user.avatar || session.user.image ? (
                    <Image
                      src={session.user.avatar || session.user.image!}
                      alt={
                        session.user.name || session.user.username || '用户头像'
                      }
                      width={38}
                      height={38}
                      className={styles.userAvatar}
                    />
                  ) : (
                    <Avatar  icon={<User />} />
                  )}
                </div>

                {userMenuOpen && (
                  <div className={styles.userDropdown}>
                    <div className={styles.userDropdownHeader}>
                      <div className={styles.userInfo}>
                        <div className={styles.userInfoName}>
                          {session.user.name || session.user.username}
                        </div>
                        <div className={styles.userInfoEmail}>
                          {session.user.email}
                        </div>
                      </div>
                    </div>
                    <div className={styles.userDropdownDivider} />
                    <div className={styles.userDropdownActions}>
                      <Link
                        href="/dashboard"
                        className={styles.userDropdownItem}
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <User className={styles.userDropdownIcon} />
                        个人中心
                      </Link>
                      <button
                        className={styles.userDropdownItem}
                        onClick={handleSignOut}
                      >
                        <LogOut className={styles.userDropdownIcon} />
                        退出登录
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className={styles.loginButton}>
                登录
              </Link>
            )}

            {/* <div className={styles.searchContainer}>
              <button
                className={styles.searchButton}
                onClick={() => setSearchOpen(true)}
                aria-label="搜索"
              >
                <Search className={styles.searchIcon} />
              </button>

              {searchOpen && (
                <div className={styles.searchBox}>
                  <div className={styles.searchInputContainer}>
                    <Search className={styles.searchInputIcon} />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="搜索..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className={styles.searchInput}
                    />
                    <button
                      className={styles.searchCloseButton}
                      onClick={() => {
                        setSearchOpen(false)
                        setSearchQuery('')
                      }}
                      aria-label="关闭搜索"
                    >
                      <X className={styles.searchCloseIcon} />
                    </button>
                  </div>

                  
                </div>
              )}
            </div> */}
          </div>

          {/* 移动端菜单按钮 */}
          <div className={styles.mobileNav}>
            <button
              className={styles.mobileMenuButton}
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon className={styles.mobileMenuIcon} />
            </button>
          </div>
        </div>
      </header>

      {/* 移动端菜单 */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div
            className={styles.mobileMenuOverlay}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileMenuHeader}>
              <div className={styles.mobileMenuTitle}>菜单</div>
              <button
                className={styles.mobileMenuClose}
                onClick={() => setMobileMenuOpen(false)}
              >
                ×
              </button>
            </div>
            <div className={styles.mobileMenuBody}>
              {/* 移动端加入我们按钮 */}
              <div className={styles.mobileMenuSection}>
                <Link
                  href="/join"
                  className={styles.mobileJoinUsButton}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  加入我们
                </Link>
              </div>

              {/* 移动端语言切换器 */}
              <div className={styles.mobileMenuSection}>
                <LanguageSwitcher />
              </div>

              {/* 移动端用户认证区域 */}
              <div className={styles.mobileMenuSection}>
                {isLoading ? (
                  <div className={styles.mobileLoginButton}>加载中...</div>
                ) : isAuthenticated && session?.user ? (
                  <div className={styles.mobileUserSection}>
                    <div className={styles.mobileUserInfo}>
                      {session.user.avatar ? (
                        <Image
                          src={session.user.avatar}
                          alt={
                            session.user.name ||
                            session.user.username ||
                            '用户头像'
                          }
                          width={40}
                          height={40}
                          className={styles.mobileUserAvatar}
                        />
                      ) : (
                        <User className={styles.mobileUserIcon} />
                      )}
                      <div className={styles.mobileUserDetails}>
                        <div className={styles.mobileUserName}>
                          {session.user.name || session.user.username}
                        </div>
                        <div className={styles.mobileUserEmail}>
                          {session.user.email}
                        </div>
                      </div>
                    </div>
                    <div className={styles.mobileUserActions}>
                      <Link
                        href="/dashboard"
                        className={styles.mobileUserAction}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        个人中心
                      </Link>
                      <button
                        className={styles.mobileUserAction}
                        onClick={() => {
                          setMobileMenuOpen(false)
                          handleSignOut()
                        }}
                      >
                        退出登录
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className={styles.mobileLoginButton}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    登录
                  </Link>
                )}
              </div>

              {translatedNavItems.map(item => (
                <div key={item.key} className={styles.mobileMenuSection}>
                  <div className={styles.mobileMenuSectionTitle}>
                    {item.label}
                  </div>
                  {item.children && (
                    <div className={styles.mobileMenuItems}>
                      {item.children.map((child: MenuItem & { label: string; description?: string }) =>
                        child.key === 'contact' ? (
                          <a
                            key={child.key}
                            href={child.href || '/about'}
                            className={styles.mobileMenuItem}
                            onClick={e => {
                              setMobileMenuOpen(false)
                              handleContactClick(e)
                            }}
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.key}
                            href={child.href || '/'}
                            className={styles.mobileMenuItem}
                            onClick={() => setMobileMenuOpen(false)}
                            target={child.target}
                          >
                            {child.label}
                            {child.hot && (
                              <span className={styles.hotIndicator}>Hot</span>
                            )}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
