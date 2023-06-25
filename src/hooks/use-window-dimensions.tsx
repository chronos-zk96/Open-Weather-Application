import { useEffect, useState } from 'react'

// get the window dimensions properties from window object
const getWindowDimensions = () => {
    const { innerWidth, innerHeight } = window;
    return [innerWidth, innerHeight];
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  // listening on window size changes
  useEffect(() => {
    const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;