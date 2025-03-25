  import React, { useEffect } from 'react';

  const CustomCursor: React.FC = () => {
    useEffect(() => {
      const updateCursor = (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && (e.target.tagName === 'BUTTON' || e.target.tagName === 'A')) {
          e.target.style.cursor = 'pointer';
        } else {
          document.body.style.cursor = 'default';
        }
      };

      document.addEventListener('mousemove', updateCursor);

      return () => {
        document.removeEventListener('mousemove', updateCursor);
        document.body.style.cursor = '';
      };
    }, []);

    return null;
  };

  export default CustomCursor;
