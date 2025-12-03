 
'use client'

import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import styles from './Carousel.module.css'
import { CarouselImage, carouselImages } from '@/data/home'
import { useTranslation } from '../../../hooks/useTranslation'

export default function Carousel() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<CarouselImage | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollDistance = window.innerWidth >= 1800 ? 425 : window.innerWidth >= 1300 ? 320 : 407
      scrollContainerRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollDistance = window.innerWidth >= 1800 ? 425 : window.innerWidth >= 1300 ? 320 : 407
      scrollContainerRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' })
    }
  }

  const openImageModal = (image: CarouselImage) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const handleDetailClick = () => {
    if (selectedImage) {
      if (selectedImage.openInNewTab) {
        window.open(selectedImage.detailUrl, '_blank')
      } else {
        window.location.href = selectedImage.detailUrl
      }
    }
  }

  return (
    <section className={styles.carousel}>
      <div className={styles.container}>
        <button 
          className={styles.navButton + ' ' + styles.navLeft}
          onClick={scrollLeft}
          aria-label="Previous images"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className={styles.scrollContainer} ref={scrollContainerRef}>
          <div className={styles.imageGrid}>
            {carouselImages.map((image, index) => (
              <div 
                key={index} 
                className={styles.imageWrapper}
                onClick={() => openImageModal(image)}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt || `Activity ${index + 1}`}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>

        <button 
          className={styles.navButton + ' ' + styles.navRight}
          onClick={scrollRight}
          aria-label="Next images"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeImageModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={closeImageModal}
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <div className={styles.imageContainer}>
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt || "Enlarged view"}
                width={800}
                height={600}
                className={styles.modalImage}
              />
              <button 
                className={styles.detailButton}
                onClick={handleDetailClick}
                aria-label="View details"
              >
                <ExternalLink size={16} />
{t('homepage.carousel.viewDetails')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
