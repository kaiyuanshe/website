import { Calendar, MapPin, Users, Video } from 'lucide-react'
import Link from 'next/link'
import styles from './Events.module.css'
import dayjs from 'dayjs'
import { Tag } from 'antd'
import { useTranslation } from '../../../hooks/useTranslation'

export function formatTime(isoTime: string): string {
  return dayjs(isoTime).format('YYYY年M月D日')
}

export default function EventSection({ events }: { events: any[] }) {
  const { t } = useTranslation()

  return (
    <section className={styles.activities}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('homepage.events.title')}</h2>
          <p className={styles.sectionDescription}>
            {t('homepage.events.description')}
          </p>
        </div>
        <div className={styles.activitiesGrid}>
          {events.map((event, index) => (
            <div key={index} className={styles.activityCard}>
              <div className={styles.activityCardGlow}></div>
              <div className={styles.activityCardHeader}>
                <div className={styles.activityMeta}>
                  {event.participants !== 0 && (
                    <div className={styles.activityParticipants}>
                      <Users className={styles.activityIcon} />
                      {event.participants}
                    </div>
                  )}
                </div>
                <h3 className={styles.activityTitle}>{event.title}</h3>
                <p className={styles.activityDescription}>
                  {event.description}
                </p>
              </div>
              <div className={styles.activityCardContent}>
                <div className={styles.activityInfo}>
                  <div className={styles.activityInfoItem}>
                    <Calendar className={styles.activityIcon} />
                    {formatTime(event.start_time)}
                  </div>
                  <div className={styles.activityInfoItem}>
                    {event.event_mode === '线上活动' ? (
                      <Video className={styles.activityIcon} />
                    ) : (
                      <MapPin className={styles.activityIcon} />
                    )}
                    {event.event_mode === '线上活动'
                      ? t('homepage.events.mode.online')
                      : event.location}
                  </div>
                </div>
                {/* 标签展示区 */}
                {event.tags && event.tags.length > 0 && (
                  <div className={styles.tagsContainer}>
                    {event.tags
                      .slice(0, 3)
                      .map((tag: string, index: number) => (
                        <Tag key={index} className={styles.tag}>
                          {tag}
                        </Tag>
                      ))}
                    {/* {event.tags.length > 3 && <Tag className={styles.moreTag}>+{event.tags.length - 3}</Tag>} */}
                  </div>
                )}
                <Link
                  href={
                    event.event_setting === 2 && event.bage_link
                      ? event.bage_link
                      : `/events/${event.ID}`
                  }
                  target={
                    event.event_setting === 2 && event.bage_link
                      ? '_blank'
                      : '_self'
                  }
                  rel={
                    event.event_setting === 2 && event.bage_link
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  passHref
                >
                  <button className={styles.activityButton}>
                    {t('homepage.events.learnMore')}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.sectionFooter}>
          <Link href="/events">
            <button className={styles.moreButton}>
              <Calendar className={styles.buttonIcon} />
              {t('homepage.events.viewMore')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
