// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainBackendTool title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainBackendTool/i);
    expect(titleElement).toBeInTheDocument();
});
