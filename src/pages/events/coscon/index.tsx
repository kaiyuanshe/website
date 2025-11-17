import { useEffect } from 'react';

export default function CosconEvent() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function (i, s, o, g, r, a, m) {
          i['BagEventIFrameResize'] = r;
          i[r] = i[r] || function () {
              (i[r].q = i[r].q || []).push(arguments)
          };
          a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m)
      })(window, document, 'script', 'https://www.bagevent.com/resources/js/iframeResizer/iframeResizer.min.js', 'bfr');
      bfr('iFrameResize', {checkOrigin: false, heightCalculationMethod: 'taggedElement'}, "#promote_ticket_iframe");
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe 
        id="promote_ticket_iframe" 
        width="100%" 
        src="https://www.bagevent.com/widget/ticket/8199016?widget=2&iframe=1" 
        frameBorder="0" 
        scrolling="no"
      />
    </div>
  );
}