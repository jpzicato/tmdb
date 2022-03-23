import { useState } from 'react';

function useViewToShow(type, setType) {
  const [data, setData] = useState({
    name: 'Register',
    description: 'Do you already have an account?',
    linkDescription: 'Log in',
  });

  const handleClick = () => {
    if (type === 'login') {
      setData({
        name: 'Register',
        description: 'Do you already have an account?',
        linkDescription: 'Log in',
      });
      setType('register');
    } else {
      setData({
        name: 'Login',
        description: 'First time on tmdb?',
        linkDescription: 'Register now',
      });
      setType('login');
    }
  };

  return { data, handleClick };
}
export default useViewToShow;
