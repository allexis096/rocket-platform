import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { darkTheme, lightTheme } from '.';

const Providers = ({ children }) => {
  const { value } = useDarkMode(false);
  const theme = value ? darkTheme : lightTheme;

  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  if (!mount) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

export default Providers;
