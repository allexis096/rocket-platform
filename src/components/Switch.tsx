import { useCallback, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { SwitchButton } from '../styles/components/Switch';

export default function Switch() {
  const { colors } = useContext(ThemeContext);

  const darkMode = useDarkMode(false);

  const toggleTheme = useCallback(() => {
    darkMode.toggle();

    darkMode.value ? darkMode.disable() : darkMode.enable();
  }, [darkMode]);

  return (
    <SwitchButton
      onChange={toggleTheme}
      checked={darkMode.value}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      className="switch-button"
      onColor={colors.primary}
      offColor={colors.button}
    />
  );
}
