/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Pagination,
  Input,
  Select,
  Button,
  Tag,
  Card,
  Image,
  Popconfirm,
  Modal,
  App as AntdApp,
} from 'antd';
import dayjs from 'dayjs';
import {
  Calendar,
  Users,
  MapPin,
  Plus,
  Edit,
  Trash2,
  Star,
  Share2,
  Globe,
  LayoutGrid,
  List,
} from 'lucide-react';
import { SiX, } from 'react-icons/si';
import Link from 'next/link';
import styles from './index.module.css';
import { getEvents, deleteEvent } from '../api/event';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/AuthContext';
import { stripMarkdown } from '@/lib/markdown';

const { Search: AntSearch } = Input;
const { Option } = Select;

type ViewMode = 'grid' | 'list';

export function formatTime(isoTime: string): string {
  return dayjs(isoTime).format('YYYY-MM-DD');
}

function previewDescription(desc?: string): string {
  if (!desc) return '';
  const text = stripMarkdown(desc);
  return text.length > 100 ? `${text.slice(0, 100)}…` : text;
}


export default function EventsPage() {
  const { message } = AntdApp.useApp();
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [events, setEvents] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [wechatModalVisible, setWechatModalVisible] = useState(false);
  const [publishStatus, setPublishStatus] = useState(2);

  const router = useRouter();
  const { session, status } = useAuth();
  const permissions = useMemo(() => session?.user?.permissions || [], [session?.user?.permissions]);

  // 新增筛选状态
  const [locationKeyword, setLocationKeyword] = useState('');
  const [eventModeFilter, setEventModeFilter] = useState('');
  const [eventTypeFilter] = useState('community'); // 社区活动

  // 加载事件列表
  const loadEvents = useCallback(async (params?: {
    keyword?: string;
    tag?: string;
    order?: 'asc' | 'desc';
    page?: number;
    page_size?: number;
    location?: string;
    event_mode?: string;
    event_type?: string;
    publish_status?: number;
  }) => {
    try {
      setLoading(true);

      const queryParams = {
        keyword: params?.keyword || searchKeyword,
        tag: params?.tag || selectedTag,
        order: params?.order || sortOrder,
        page: params?.page || currentPage,
        page_size: params?.page_size || pageSize,
        location: params?.location || locationKeyword,
        event_mode: params?.event_mode || eventModeFilter,
        event_type: params?.event_type || eventTypeFilter,
        publish_status: params?.publish_status || publishStatus,
      };

      const result = await getEvents(queryParams);

      if (result.success && result.data) {
        if (result.data.events && Array.isArray(result.data.events)) {
          setEvents(result.data.events);
          setCurrentPage(result.data.page || 1);
          setPageSize(result.data.page_size || 6);
          setTotal(result.data.total || result.data.events.length);
        } else if (Array.isArray(result.data)) {
          setEvents(result.data);
          setTotal(result.data.length);
        } else {
          console.warn('API 返回的数据格式不符合预期:', result.data);
          setEvents([]);
          setTotal(0);
        }
      } else {
        console.error('获取事件列表失败:', result.message);
        setEvents([]);
        setTotal(0);
      }
    } catch (error: unknown) {
      console.error('加载事件列表异常:', error);
      setEvents([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [searchKeyword, selectedTag, sortOrder, currentPage, pageSize, locationKeyword, eventModeFilter, eventTypeFilter, publishStatus]);


  // 根据登录状态更新 publishStatus
  useEffect(() => {
    if (status === 'authenticated' && permissions.includes('event:review')) {
      setPublishStatus(0);
    } else if (status === 'unauthenticated') {
      setPublishStatus(2);
    }
  }, [status, permissions]);

  // 主要的数据加载效果
  useEffect(() => {
    if (!router.isReady) return;

    loadEvents();
  }, [
    searchKeyword,
    selectedTag,
    sortOrder,
    currentPage,
    pageSize,
    locationKeyword,
    eventModeFilter,
    eventTypeFilter,
    publishStatus,
    loadEvents,
    router.isReady,
  ]);

  // 搜索事件
  const handleSearch = async (keyword: string) => {
    setSearchKeyword(keyword);
    setCurrentPage(1);
  };

  // 排序切换
  const handleSortChange = async (order: 'asc' | 'desc') => {
    setSortOrder(order);
    setCurrentPage(1);
  };


  // 地址搜索
  const handleLocationSearch = async (location: string) => {
    setLocationKeyword(location);
    setCurrentPage(1);
  };

  // 活动形式筛选
  const handleEventModeFilter = async (event_mode: string) => {
    setEventModeFilter(event_mode);
    setCurrentPage(1);
  };


  // 分页处理
  const handlePageChange = async (page: number, size?: number) => {
    setCurrentPage(page);
    if (size && size !== pageSize) {
      setPageSize(size);
    }
  };

  // 清除筛选 - 同时清除 URL 参数
  const handleClearFilters = async () => {
    setSearchKeyword('');
    setSelectedTag('');
    setSortOrder('desc');
    setLocationKeyword('');
    setEventModeFilter('');
    setCurrentPage(1);

  };

  const handleSwitchViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    setCurrentPage(1);
  };

  // 计算当前显示的事件
  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, total);

  const currentEvents = events;


  const handleDeleteEvent = async (id: number) => {
    try {
      const result = await deleteEvent(id);
      if (result.success) {
        message.success(result.message);
        loadEvents();
      } else {
        message.error(result.message || '删除活动失败');
      }
    } catch {
      message.error('删除失败，请重试');
    }
  };


  return (
    <div className={`${styles.container} nav-t-top`}>
      {/* Title Section */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>精彩活动</h1>
            <p className={styles.subtitle}>发现精彩活动，连接志同道合的人</p>
          </div>
          {permissions.includes('event:write') && (
            <Link href={`/events/new?event_type=${eventTypeFilter}`} className={styles.createButton}>
              <Plus size={20} />
              发布活动
            </Link>
          )}
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className={styles.searchSection}>
        <div className={styles.searchBar}>
          <AntSearch
            placeholder="搜索活动标题、描述..."
            allowClear
            size="large"
            enterButton="搜索"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onSearch={handleSearch}
            onClear={() => handleSearch('')}
            loading={loading}
          />
        </div>
        <div className={styles.filterButtons}>
          <Select
            size="large"
            value={sortOrder}
            style={{ width: 100 }}
            onChange={handleSortChange}
          >
            <Option value="desc">最新</Option>
            <Option value="asc">最早</Option>
          </Select>

          <Select
            size="large"
            placeholder="活动形式"
            allowClear
            style={{ width: 120 }}
            value={eventModeFilter}
            onChange={handleEventModeFilter}
          >
            <Option value="">所有</Option>
            <Option value="线上活动">线上活动</Option>
            <Option value="线下活动">线下活动</Option>
          </Select>

          <div className={styles.locationSearch}>
            <Input
              size="large"
              placeholder="活动地点"
              allowClear
              value={locationKeyword}
              onChange={(e) => setLocationKeyword(e.target.value)}
              onPressEnter={() => handleLocationSearch(locationKeyword)}
            />
          </div>
          <Button size="large" onClick={handleClearFilters}>
            重置
          </Button>
        </div>
      </div>

      {/* View Controls */}
      <div className={styles.viewControls}>
        <div className={styles.viewModeToggle}>
          <button
            className={`${styles.viewModeButton} ${viewMode === 'grid' ? styles.active : ''}`}
            onClick={() => handleSwitchViewMode('grid')}
          >
            <LayoutGrid className={styles.viewModeIcon} />
            卡片视图
          </button>
          <button
            className={`${styles.viewModeButton} ${viewMode === 'list' ? styles.active : ''}`}
            onClick={() => handleSwitchViewMode('list')}
          >
            <List className={styles.viewModeIcon} />
            列表视图
          </button>
        </div>
        <div className={styles.resultsInfo}>
          <Pagination
            current={currentPage}
            total={total}
            pageSize={pageSize}
            onChange={handlePageChange}
            showTotal={(total) =>
              `显示 ${startIndex}-${endIndex} 项，共 ${total} 项`
            }
            className={styles.fullPagination}
          />
        </div>
      </div>

      {/* Events Display */}
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}></div>
        </div>
      ) : events.length === 0 ? (
        <div className={styles.emptyContainer}>
          <div className={styles.emptyIcon}>📅</div>
          <div className={styles.emptyTitle}>暂无活动</div>
          <div className={styles.emptyDescription}>
            {searchKeyword ||
              selectedTag ||
                        locationKeyword ||
              eventModeFilter ||
              eventTypeFilter
              ? '没有找到符合条件的活动'
              : '还没有创建任何活动'}
          </div>
          {!searchKeyword &&
            !selectedTag &&
                    !locationKeyword &&
            !eventModeFilter &&
            !eventTypeFilter &&
            permissions.includes('event:write') && (
              <Link href={`/events/new?event_type=${eventTypeFilter}`} className={styles.createButton}>
                <Plus className={styles.buttonIcon} />
                创建第一个活动
              </Link>
            )}
        </div>
      ) : viewMode === 'grid' ? (
        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <Link
              href={`/events/${event.ID}`}
              key={event.ID}
              className={styles.cardLink}
            >
              
              <Card
                className={styles.eventCard}
                cover={
                  <div className={styles.cardCover}>
                    <Image
                      alt={event.title}
                      src={
                        event.cover_img ||
                        '/placeholder.svg?height=240&width=400&text=活动封面'
                      }
                      className={styles.coverImage}
                      preview={false}
                    />
                    <div className={styles.coverOverlay}>
                      <div className={styles.cardActions}>
                        {status === 'authenticated' &&
                          permissions.includes('event:write') ? (
                          <Button
                            className={styles.actionIconButton}
                            onClick={(e) => {
                              e.preventDefault();
                              router.push(`/events/${event.ID}/edit?event_type=${eventTypeFilter}`);
                            }}
                            icon={<Edit className={styles.actionIcon} />}
                            title="编辑活动"
                          />
                        ) : null}
                        <Button
                          className={styles.actionIconButton}
                          onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard.writeText(
                              `${window.location.href}/${event.ID}`
                            );
                            message.success('链接已复制到剪贴板');
                          }}
                          icon={<Share2 className={styles.actionIcon} />}
                          title="分享活动"
                        />
                        <Button
                          className={styles.actionIconButton}
                          onClick={(e) => {
                            e.preventDefault();
                            if (event.twitter) {
                              window.open(event.twitter, '_blank');
                            }
                          }}
                          icon={<SiX className={styles.actionIcon} />}
                          title="查看推文"
                        />
                        {status === 'authenticated' &&
                          permissions.includes('event:write') ? (
                          <Popconfirm
                            title="删除活动"
                            description="你确定删除这个活动吗？"
                            okText="是"
                            cancelText="否"
                            onConfirm={(e) => {
                              e?.preventDefault();
                              handleDeleteEvent(event.ID);
                            }}
                          >
                            <Button
                              className={styles.actionIconButton}
                              danger
                              icon={<Trash2 className={styles.actionIcon} />}
                              title="删除活动"
                              onClick={(e) => e.preventDefault()}
                            />
                          </Popconfirm>
                        ) : null}
                      </div>
                    </div>
                  </div>
                }
              // variant={false}
              >
                <div className={styles.cardBody}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>

                  <div className={styles.cardMeta}>
                    <div className={styles.metaItem}>
                      <Calendar className={styles.metaIcon} />
                      <span>{formatTime(event.start_time)}</span>
                    </div>
                    <div className={styles.metaItem}>
                      {event.event_mode === '线上活动' ? (
                        <>
                          <Globe className={styles.metaIcon} />
                          <span className={styles.locationText}>线上活动</span>
                        </>
                      ) : (
                        <>
                          <MapPin className={styles.metaIcon} />
                          <span className={styles.locationText}>
                            {event.location || '未指定地点'}
                          </span>
                        </>
                      )}
                    </div>
                    {event.participants !== 0 && (
                      <div className={styles.metaItem}>
                        <Users className={styles.metaIcon} />
                        <span>{event.participants || ''}</span>
                      </div>
                    )}
                  </div>
                  {event.tags && event.tags.length > 0 && (
                    <div className={styles.cardTags}>
                      {event.tags
                        .slice(0, 3)
                        .map((tag: string, index: number) => (
                          <Tag key={index} className={styles.eventTag}>
                            {tag}
                          </Tag>
                        ))}
                      {event.tags.length > 3 && (
                        <Tag className={styles.moreTag}>
                          +{event.tags.length - 3}
                        </Tag>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.listViewContainer}>
          {/* Top Pagination for List View */}

          {/* Events List */}
          <div className={styles.eventsList}>
            <div className={styles.listHeader}>
              <div className={`${styles.listHeaderCell} ${styles.nameColumn}`}>
                活动名称
              </div>
              <div className={styles.listHeaderCell}>时间</div>
              <div className={styles.listHeaderCell}>地点</div>
              <div className={styles.listHeaderCell}>参与人数</div>
              <div className={styles.listHeaderCell}>操作</div>
            </div>
            {currentEvents.map((event) => (
              <div key={event.ID} className={styles.listRow}>
                <div className={styles.listCell}>
                  <div
                    className={`${styles.eventTitleRow} ${styles.nameColumn}`}
                  >
                    <Link
                      href={`/events/${event.ID}`}
                      key={event.ID}
                      className={styles.listLink}
                    >
                      {event.title}
                    </Link>
                    {event.featured && (
                      <Star className={styles.listFeaturedIcon} />
                    )}
                  </div>
                  <p className={styles.listEventDescription}>
                    {previewDescription(event.desc || event.description)}
                  </p>
                </div>
                <div className={styles.listCell}>
                  <div className={styles.timeInfo}>
                    <div className={styles.dateTime}>
                      <Calendar className={styles.listIcon} />
                      <span>{formatTime(event.start_time)}</span>
                    </div>
                    {/* {event.end_time && (
                      <div className={styles.time}>
                        至 {formatTime(event.end_time)}
                      </div>
                    )} */}
                  </div>
                </div>
                <div className={styles.listCell}>
                  <div className={styles.locationInfo}>
                    {event.event_mode === '线上活动' ? (
                      <>
                        <Globe className={styles.listIcon} />
                        <span className={styles.locationText}>线上活动</span>
                      </>
                    ) : (
                      <>
                        <MapPin className={styles.listIcon} />
                        <span className={styles.locationText}>
                          {event.location || '未指定地点'}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className={styles.listCell}>
                  <div className={styles.participantsInfo}>
                    <Users className={styles.listIcon} />
                    <span>{event.participants || 0}</span>
                  </div>
                </div>
                <div className={styles.listCell}>
                  <div className={styles.listActions}>
                    {/* <Button
                      type="text"
                      size="small"
                      icon={<Eye className={styles.listActionIcon} />}
                      title="查看详情"
                    /> */}
                    {status === 'authenticated' &&
                      permissions.includes('event:write') ? (
                      <Button
                        type="text"
                        size="small"
                        icon={<Edit className={styles.listActionIcon} />}
                        title="编辑活动"
                        onClick={() => router.push(`/events/${event.ID}/edit?event_type=${eventTypeFilter}`)}
                      />
                    ) : null}
                    <Button
                      type="text"
                      size="small"
                      onClick={(e) => {
                        e.preventDefault();
                        navigator.clipboard.writeText(
                          `${window.location.href}/${event.ID}`
                        );
                        message.success('链接已复制到剪贴板');
                      }}
                      icon={<Share2 className={styles.listActionIcon} />}
                      title="分享活动"
                    />
                    {status === 'authenticated' &&
                      permissions.includes('event:write') ? (
                      <Popconfirm
                        title="删除活动"
                        description="你确定删除这个活动吗？"
                        okText="是"
                        cancelText="否"
                        onConfirm={() => handleDeleteEvent(event.ID)}
                      >
                        <Button
                          type="text"
                          size="small"
                          danger
                          icon={<Trash2 className={styles.listActionIcon} />}
                          title="删除活动"
                        />
                      </Popconfirm>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.listBottomControls}>
        <div className={styles.bottomPagination}>
          <Pagination
            current={currentPage}
            total={total}
            pageSize={pageSize}
            onChange={handlePageChange}
            // showQuickJumper={true}
            showTotal={(total) =>
              `显示 ${startIndex}-${endIndex} 项，共 ${total} 项`
            }
            className={styles.fullPagination}
          />
        </div>
      </div>

      <Modal
        open={wechatModalVisible}
        onCancel={() => setWechatModalVisible(false)}
        footer={null}
        centered
        className={styles.wechatModal}
      >
        <div className={styles.wechatModalContent}>
          <div className={styles.qrCodeSection}>
            <Image
              src=""
              alt="小助手二维码"
              width={200}
              height={200}
              preview={false}
            />
            <p>扫码加入微信群</p>
          </div>
          <div className={styles.qrCodeSection}>
            <Image
              src=""
              alt="公众号二维码"
              width={200}
              height={200}
              preview={false}
            />
            <p>扫码关注公众号</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
