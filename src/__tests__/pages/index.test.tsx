import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Providers from '../../styles/themes/Providers';
import App from '../../pages/index';

describe('Index page', () => {
  it('should be able to render Index page', () => {
    const { container } = render(
      <Providers>
        <App />
      </Providers>
    );

    expect(container).toBeInTheDocument();
  });
});
