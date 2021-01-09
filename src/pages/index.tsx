import Link from 'next/link';
import { FiMail } from 'react-icons/fi';
import { FaLock, FaGithub } from 'react-icons/fa';
import Switch from 'react-switch';

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
import LogoDark from '../../public/logo-dark.svg';
import LogoLight from '../../public/logo-light.svg';
import Input from '../components/Input';
import { useCallback, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import useDarkMode from 'use-dark-mode';

export default function Home() {
  const { colors } = useContext(ThemeContext);
  const darkMode = useDarkMode(false);

  const toggleTheme = useCallback(() => {
    darkMode.toggle();

    darkMode.value ? darkMode.disable() : darkMode.enable();
  }, [darkMode]);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={darkMode.value}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        className="switch"
        onColor={colors.primary}
        offColor={colors.button}
      />
      <Header>
        {darkMode.value ? <LogoDark /> : <LogoLight />}
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

          <Link href="/dashboard">
            <SignInButton>Entrar</SignInButton>
          </Link>

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
