import Link from 'next/link';
import { FiMail } from 'react-icons/fi';
import { FaLock, FaGithub } from 'react-icons/fa';

import {
  Container,
  Header,
  Main,
  Content,
  SignInButton,
  CreateAccount,
  Divider,
  GithubAction,
} from '../styles/pages/index';
import Logo from '../../public/logo.svg';
import Input from '../components/Input';

export default function Home() {
  return (
    <Container>
      <Header>
        <Logo />
        <h1>
          Faça seu login <br />
          na plataforma
        </h1>
      </Header>
      <Main>
        <Content>
          <Input icon={FiMail} placeholder="E-mail" />
          <Input icon={FaLock} placeholder="Senha" password />
          <Link href="/">
            <a>Esqueci minha senha</a>
          </Link>

          <SignInButton>Entrar</SignInButton>

          <CreateAccount>
            Não tem uma conta?{' '}
            <Link href="/">
              <a>Registre-se</a>
            </Link>
          </CreateAccount>

          <Divider>
            <div />
            <div />
          </Divider>

          <GithubAction>
            <span>Ou entre com</span>
            <button type="button">
              <FaGithub size={20} />
              Github
            </button>
          </GithubAction>
        </Content>
      </Main>
    </Container>
  );
}
