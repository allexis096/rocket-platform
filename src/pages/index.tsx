import { useCallback } from 'react';
import { FiMail } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa';

import Logo from '../../public/logo.svg';
import Input from '../components/Input';

export default function Home() {
  const handleSubmit = useCallback(() => {
    console.log('ok');
  }, []);

  return (
    <div className="box-border h-screen flex justify-center items-center font-sans bg-primary text-primary">
      <div className="max-w-screen-lg h-4/6 grid grid-cols-2">
        <div className="max-w-lg self-center">
          <Logo className="mb-16" />
          <h1 className="text-h1Login font-bold min-w-max leading-none">
            Faça seu login
            <br />
            na plataforma
          </h1>
        </div>

        <div className="bg-secondary p-16 max-w-md rounded-md">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <Input placeholder="E-mail" icon={FiMail} />
            <Input placeholder="Senha" icon={FaLock} />
            <a>Esqueci minha senha</a>
            <button>Entrar</button>
          </form>

          <p>
            Não tem uma conta? <a href="">Registre-se</a>
          </p>

          <div>
            <span>Ou entre com </span>
            <button>GITHUB</button>
          </div>
        </div>
      </div>
    </div>
  );
}
