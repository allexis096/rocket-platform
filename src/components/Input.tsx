import { useState } from 'react';
import { IconType } from 'react-icons';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

interface InputProps {
  placeholder: string;
  icon: IconType;
}

export default function Input({ placeholder, icon: Icon }: InputProps) {
  const [focus, setFocus] = useState(false);
  const [showPassword, setshowPassword] = useState(false);

  return (
    <div className="relative">
      <Icon
        className="absolute top-4 left-4"
        color="#121214"
        fill={`${focus === true ? '#8464e5' : '#202024'}`}
        size={14}
      />
      {placeholder === 'Senha' ? (
        <>
          <input
            className="bg-primary h-12 pr-10 pl-11 w-80 rounded-md mb-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-75"
            type={showPassword === false ? 'password' : 'text'}
            placeholder={placeholder}
            onFocus={() => setFocus(!focus)}
            onBlur={() => setFocus(!focus)}
          />
          {showPassword === false ? (
            <BsEyeFill
              onClick={() => setshowPassword(!showPassword)}
              className="absolute top-4 right-4 cursor-pointer"
              color="#121214"
              fill="#8464e5"
              size={18}
            />
          ) : (
            <BsEyeSlashFill
              onClick={() => setshowPassword(!showPassword)}
              className="absolute top-4 right-4 cursor-pointer"
              color="#121214"
              fill="#5e47a0"
              size={18}
            />
          )}
        </>
      ) : (
        <input
          className="bg-primary h-12 pr-6 pl-11 w-80 rounded-md mb-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-75"
          type="text"
          placeholder={placeholder}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
      )}
    </div>
  );
}
