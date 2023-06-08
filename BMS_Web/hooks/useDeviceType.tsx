import { useState, useEffect } from 'react';

function useDeviceType() {
    const [isSmallScreen, setIsSmallScreen] = useState(!false);
  
    useEffect(() => {
      function handleResize() {
        setIsSmallScreen(window.innerWidth < 400);
      }
  
      window.addEventListener('resize', handleResize);
      handleResize(); // initial check on mount
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return isSmallScreen;
  }
  
export default useDeviceType;
