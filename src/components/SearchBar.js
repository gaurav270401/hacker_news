import React, { useState } from 'react';
import { InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash/debounce'; // Import debounce from lodash

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Debounce the search function with a delay of 300 milliseconds
  const debouncedSearch = debounce(onSearch, 300);

  const handleSearch = () => {
    debouncedSearch(query);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: 4,
      }}
    >
      <InputBase
        placeholder="Search Hackernews"
        inputProps={{ 'aria-label': 'search hackernews' }}
        fullWidth
        sx={{ ml: 1, flex: 1 }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type="button" onClick={handleSearch} sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
