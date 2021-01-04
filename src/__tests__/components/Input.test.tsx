import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IconBase } from 'react-icons';

import Providers from '../../styles/themes/Providers';
import Input from '../../components/Input';

describe('Input component', () => {
  it('should be able to render Input Password with focus and blur', async () => {
    const setFocus = jest.fn();

    render(
      <Providers>
        <Input
          placeholder="Senha"
          password
          icon={IconBase}
          onFocus={setFocus()}
          onBlur={setFocus()}
        />
      </Providers>
    );

    await waitFor(() => {
      expect(setFocus).toHaveBeenCalledTimes(2);
    });
  });

  it('should be able to switch between password and text on Input Password', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Providers>
        <Input placeholder="Senha" password icon={IconBase} />
      </Providers>
    );

    const passwordInput = getByPlaceholderText('Senha');
    const eyePassword = getByTestId('eye-password');

    fireEvent.click(eyePassword);

    await waitFor(() => {
      expect(passwordInput).toHaveProperty('type', 'text');
    });

    const eyeText = getByTestId('eye-passwordText');

    fireEvent.click(eyeText);

    await waitFor(() => {
      expect(passwordInput).toHaveProperty('type', 'password');
    });
  });

  it('should be able to render a common Input with focus and blur', async () => {
    const setFocus = jest.fn();

    render(
      <Providers>
        <Input placeholder="E-mail" icon={IconBase} onFocus={setFocus()} onBlur={setFocus()} />
      </Providers>
    );

    await waitFor(() => {
      expect(setFocus).toHaveBeenCalledTimes(2);
    });
  });
});
