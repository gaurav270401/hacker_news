// App.js

import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PostDetail from './components/PostDetail';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Container, Typography, CssBaseline, createTheme } from '@mui/material';

const theme = createTheme();

// Add a background color to the body
const GlobalStyle = createGlobalStyle`
  @keyframes fadeIn {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0; /* Adjust to a lighter background */
    margin: 0;
    padding: 0;
  }
`;

const StyledContainer = styled(Container)`
  max-width: 200px;
  margin: 40px auto; 
  padding: 20px;
  background-color: #fff;
  border-radius: 12px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled(Typography)`
  font-size: 2.5em;
  color: #007acc; /* Dark blue color */
  margin: 20px 0;
  padding: 10px;
  cursor: pointer;
  animation: fadeIn 2s ease-in-out infinite;
  text-align: center;
`;


const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const searchHackerNews = async (query) => {
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
      setSearchResults(response.data.hits);
      setSelectedPostId(null);
    } catch (error) {
      console.error('Error searching Hacker News:', error);
    }
  };

  const handleItemClick = (objectId) => {
    setSelectedPostId(objectId);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <StyledContainer>
        <StyledTitle
          variant="h1"
          component="div"
          onClick={() => searchHackerNews('Hackernews')}
        >
          Hackernews
        </StyledTitle>

        <SearchBar onSearch={searchHackerNews} />

        {selectedPostId ? (
          <PostDetail objectId={selectedPostId} />
        ) : (
          <SearchResults
            results={searchResults}
            onItemClick={handleItemClick}
          />
        )}
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;
