import React, { useEffect, useRef, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Define the type for activity locations
interface ActivityLocation {
  city: string;
  province: string;
  coordinates: [number, number]; // [latitude, longitude]
  count: number;
  activities: string[];
}

// Activity data based on the original website
const activityLocations: ActivityLocation[] = [
  {
    city: '成都',
    province: '四川省',
    coordinates: [30.5728, 104.0668],
    count: 4,
    activities: [
      '2023 第八届中国开源年会',
      '开源社成都分会活动',
      '开源技术交流会',
      '开源项目孵化活动'
    ]
  },
  {
    city: '北京',
    province: '北京市',
    coordinates: [39.9042, 116.4074],
    count: 3,
    activities: [
      '中国开源年会 2024',
      '开源治理论坛',
      '开源项目展示会'
    ]
  },
  {
    city: '臺北市',
    province: '台湾省',
    coordinates: [25.0330, 121.5654],
    count: 3,
    activities: [
      'COSCUP 2024 大陆讲师团',
      '两岸开源交流会',
      '开源技术论坛'
    ]
  },
  {
    city: '上海',
    province: '上海市',
    coordinates: [31.2304, 121.4737],
    count: 2,
    activities: [
      '开源社上海分会活动',
      '开源技术沙龙'
    ]
  },
  {
    city: '深圳',
    province: '广东省',
    coordinates: [22.5431, 114.0579],
    count: 1,
    activities: [
      '开源硬件论坛'
    ]
  }
];

function LeafletMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current) {
      // Dynamically import leaflet to avoid SSR issues
      import('leaflet').then((L) => {
        // Fix for default markers in Leaflet with Webpack
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });

        // Initialize the map
        const map = L.map(mapRef.current!, {
          center: [35.0, 110.0], // Center on China
          zoom: 5,
          scrollWheelZoom: false,
          dragging: true,
          tap: true,
          touchZoom: true
        });

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add markers for each activity location
        activityLocations.forEach((location) => {
          const marker = L.marker(location.coordinates).addTo(map);
          
          // Create popup content
          const popupContent = `
            <div>
              <h3 style="margin: 0 0 10px 0; color: #1890ff; font-size: 16px;">${location.city}</h3>
              <p style="margin: 0 0 5px 0; font-weight: bold; color: #333;">活动数量: ${location.count}</p>
              <ul style="margin: 5px 0 0 0; padding-left: 20px;">
                ${location.activities.map(activity => `<li style="margin-bottom: 3px;">${activity}</li>`).join('')}
              </ul>
            </div>
          `;
          
          marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'activity-popup'
          });
        });

        setIsLoaded(true);

        // Cleanup function
        return () => {
          map.remove();
        };
      });
    }
  }, []);

  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <div 
        ref={mapRef} 
        style={{ 
          height: '100%',
          width: '100%',
          borderRadius: '12px',
          overflow: 'hidden'
        }}
      />
      {!isLoaded && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '18px',
          textAlign: 'center'
        }}>
          <div>正在加载地图...</div>
          <div style={{ fontSize: '14px', marginTop: '10px', opacity: 0.8 }}>
            活动地点: 成都(4) | 北京(3) | 臺北市(3) | 上海(2) | 深圳(1)
          </div>
        </div>
      )}
    </>
  );
}

export default function ActivityMap() {
  return (
    <section className="map-section">
      <div className="container">
        <h2 className="section-title" style={{ color: 'white' }}>Activity Map</h2>
        <div className="map-container" style={{ position: 'relative' }}>
          <BrowserOnly fallback={
            <div style={{
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '1.2rem',
              borderRadius: '12px'
            }}>
              <div>
                <p>Interactive Map Loading...</p>
                <p>Activity locations: 成都(4) | 臺北市(3) | 上海(2) | 北京(3) | 深圳(1)</p>
              </div>
            </div>
          }>
            {() => <LeafletMap />}
          </BrowserOnly>
        </div>
      </div>
    </section>
  );
}