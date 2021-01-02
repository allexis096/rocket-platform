import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from '../../pages/index';

describe('Index page', () => {
  it('should be able to render Index page', () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });
});
