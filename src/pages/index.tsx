import { useCallback } from 'react';
import Logo from '../../public/logo.svg';

export default function Home() {
  const handleSubmit = useCallback(() => {
    console.log('ok');
  }, []);

  return (
    <div className="box-border h-screen flex justify-center items-center font-sans bg-primary text-primary">
      <section className="flex max-w-4xl h-4/6">
        <div className="max-w-lg self-center">
          <Logo />
          <h1 className="text-h1Login font-bold min-w-max">
            Faça seu login
            <br />
            na plataforma
          </h1>
        </div>

        <div className="bg-secondary p-16 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input className="bg-primary h-12" type="text" placeholder="E-mail" />
            <input type="text" placeholder="Senha" />
            <span>Esqueci minha senha</span>
            <button>Entrar</button>
          </form>

          <p>
            Não tem uma conta? <a href="">Registre-se</a>
          </p>

          <div>
            <span>Ou entre com</span>
            <button>GITHUB</button>
          </div>
        </div>
      </section>
    </div>
  );
}
