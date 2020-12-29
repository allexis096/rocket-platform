import { useCallback, useState } from 'react';
import Link from 'next/link';
import { FiMail } from 'react-icons/fi';
import { FaLock, FaGithub } from 'react-icons/fa';

import Logo from '../../public/logo.svg';
import Input from '../components/Input';

export default function Home() {
  const [githubHover, setGithubHover] = useState(false);

  const handleSubmit = useCallback(() => {
    console.log('ok');
  }, []);

  return (
    <div className="box-border md:h-screen flex justify-center items-center font-sans bg-primary text-primary antialiased">
      <div className="max-w-screen-lg h-4/6 md:grid md:grid-cols-2 flex flex-col">
        <div className="max-w-lg md:self-center h-3/5 md:ml-3 mt-10">
          <Logo className="mb-16" />
          <h1 className="text-h1Login font-bold min-w-max leading-tight mb-5">
            Faça seu login
            <br />
            na plataforma
          </h1>
        </div>

        <div className="bg-secondary p-16 rounded-md md:w-480px w-96">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <Input placeholder="E-mail" icon={FiMail} />
            <Input placeholder="Senha" icon={FaLock} />
            <a className="w-36 mb-4 text-rocket text-small font-bold cursor-pointer opacity-80 hover:opacity-100">
              Esqueci minha senha
            </a>
            <Link href="/">
              <a className="bg-rocket flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity focus:outline-none uppercase font-bold h-12 pr-6 pl-11 md:w-352px rounded-md mb-4 cursor-pointer">
                Entrar
              </a>
            </Link>
          </form>

          <p className="mb-4 text-small text-center">
            Não tem uma conta?{' '}
            <a className="text-rocket font-bold cursor-pointer opacity-80 hover:opacity-100">
              Registre-se
            </a>
          </p>

          <div className="flex justify-between">
            <div className="w-5/12 h-px bg-github" />
            <div className="w-5/12 h-px bg-github mb-6" />
          </div>

          <div className="flex">
            <span className="text-small mr-6 self-center whitespace-nowrap">Ou entre com </span>
            <Link href="/">
              <a
                onMouseEnter={() => setGithubHover(!githubHover)}
                onMouseLeave={() => setGithubHover(!githubHover)}
                className="w-full flex items-center justify-center bg-github font-bold h-12 rounded-md opacity-90 hover:opacity-100 hover:bg-rocket transition-opacity cursor-pointer"
              >
                <FaGithub
                  fill={githubHover === true ? '#fff' : '#8464e5'}
                  className="mr-2.5"
                  size={20}
                />
                GITHUB
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
