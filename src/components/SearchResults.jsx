// components/SearchResults.jsx

import React from 'react';
import { List, ListItem, Typography, styled } from '@mui/material';

const StyledPaper = styled(List)`
  background-color: #f0f8ff; /* Very light blue background */
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const SearchResults = ({ results, onItemClick }) => {
  return (
    <StyledPaper>
      <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        Search Results
      </Typography>
      <List sx={{ width: '100%' }}>
        {results.map((result, index) => (
          <ListItem
            key={result.objectID}
            onClick={() => onItemClick(result.objectID)}
            sx={{
              cursor: 'pointer',
              marginBottom: 1,
              padding: 2,
              borderRadius: 8,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: index % 2 === 0 ? '#ffffff' : '#e6f7ff', 
              color: '#333333', // Text color
              display: 'flex',
              justifyContent: 'space-between', // Align items to the left and right
            }}
          >
            <div style={{ flex: 1 }}>

              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                {result.title || 'No Title'}
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2" color="textSecondary" sx={{ alignSelf: 'flex-start' }}>
                Author: {result.author}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" textAlign="right">
                {new Date(result.created_at).toLocaleDateString()} {/* Display created date */}
              </Typography>
              </div>
            </div>
          </ListItem>
        ))}
      </List>
    </StyledPaper>
  );
};

export default SearchResults;
