// src/components/App.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import App from './App';

jest.mock('axios');

const mockResponse = {
  data: {
    hits: [
      { objectID: '1', title: 'Test Title 1' },
      { objectID: '2', title: 'Test Title 2' },
    ],
  },
};

test('renders App component', async () => {
  axios.get.mockResolvedValue(mockResponse);

  render(<App />);

  // Check if the title is present
  expect(screen.getByText('Hackernews')).toBeInTheDocument();

  // Simulate a search
  userEvent.type(screen.getByPlaceholderText('Search Hackernews'), 'test');
  userEvent.click(screen.getByRole('button', { name: 'Search' }));

  // Wait for the search to complete
  await waitFor(() => expect(screen.getByText('Test Title 1')).toBeInTheDocument());
  expect(screen.getByText('Test Title 2')).toBeInTheDocument();
});

