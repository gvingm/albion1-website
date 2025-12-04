import React, { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
    const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

    if (analyticsEndpoint && websiteId) {
      const script = document.createElement('script');
      script.src = `${analyticsEndpoint}/umami.js`;
      script.setAttribute('data-website-id', websiteId);
      script.async = true;
      script.defer = true;

      document.head.appendChild(script);

      return () => {
        // Clean up the script when the component unmounts
        document.head.removeChild(script);
      };
    }
  }, []); // Empty dependency array ensures this runs only once

  return null;
};

export default Analytics;
