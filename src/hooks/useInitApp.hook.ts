import { useEffect } from 'react';

const useInitApp = () => {
  useEffect(() => {
    const animate = () => {
      const animateElements = document.querySelectorAll('.animate');

      animateElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('show');
        }, index * 150);
      });
    };

    const onScroll = () => {
      if (window.scrollY > 0) {
        document.documentElement.classList.add('scrolled');
      } else {
        document.documentElement.classList.remove('scrolled');
      }
    };

    animate();

    document.addEventListener('scroll', onScroll);
  }, []);
};

export default useInitApp;
