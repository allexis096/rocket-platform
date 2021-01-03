import { InputHTMLAttributes, useState } from 'react';

import { Container } from '../styles/components/Input';
import { IconType } from 'react-icons';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import useDarkMode from 'use-dark-mode';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  password?: boolean;
  icon: IconType;
}

export default function Input({ placeholder, icon: Icon, password }: InputProps) {
  const darkMode = useDarkMode();

  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(false);

  if (password) {
    return (
      <Container>
        <Icon
          size={15}
          fill={`${focus === true ? '#8464e5' : '#202024'}`}
          color="#121214"
          style={{ margin: '2px 3px' }}
        />
        <input
          style={{ paddingRight: '2.5em' }}
          className="password"
          type={showPassword === false ? 'password' : 'text'}
          placeholder={placeholder}
          onFocus={() => setFocus(prev => !prev)}
          onBlur={() => setFocus(prev => !prev)}
        />
        {showPassword === false ? (
          <IoMdEye
            data-testid="eye-password"
            onClick={() => setShowPassword(prev => !prev)}
            className="eye-password"
            size={18}
          />
        ) : (
          <IoMdEyeOff
            data-testid="eye-passwordText"
            onClick={() => setShowPassword(prev => !prev)}
            className="eye-password"
            size={18}
          />
        )}
      </Container>
    );
  }

  return (
    <Container>
      <Icon
        size={20}
        fill={`${focus === true ? '#8464e5' : '#202024'}`}
        color={`${darkMode.value ? '#121214' : '#eee'}`}
      />
      <input
        type="text"
        placeholder={placeholder}
        onFocus={() => setFocus(prev => !prev)}
        onBlur={() => setFocus(prev => !prev)}
      />
    </Container>
  );
}
