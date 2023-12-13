// components/PostDetail.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { Paper, Typography, List, ListItem, styled } from '@mui/material';

const StyledPaper = styled(Paper)`
  background-color: #f0f8ff; /* Very light blue background */
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 4px;
`;


const PostDetail = ({ objectId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://hn.algolia.com/api/v1/items/${objectId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPost();
  }, [objectId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const sanitizeHTML = (html) => {
    return DOMPurify.sanitize(html, { ALLOWED_TAGS: ['em'] });
  };

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        {post.title}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
        Points: {post.points}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
        Comments:
      </Typography>
      <List>
        {post.children &&
          post.children.map((comment, index) => (
            <ListItem
              key={comment.id}
              sx={{
                marginBottom: 1,
                padding: 2,
                borderRadius: 8,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                backgroundColor: index % 2 === 0 ? '#ffffff' : '#e6f7ff', // Same as the search results background color
                display: 'flex',
                justifyContent: 'space-between', // Align items to the left and right
              }}
            >
              <div style={{ flex: 1 }} >
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="subtitle2" color="textSecondary" sx={{ alignSelf: 'flex-start' }}>
                  By: {comment.author}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" sx={{ alignSelf: 'flex-end' }}>
                  {new Date(comment.created_at).toLocaleDateString()}
                </Typography>
              </div>
              <p></p>
              <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(comment.text) }} style={{ textAlign: 'justify' }} />
                
              </div>
            </ListItem>
          ))}
      </List>
    </StyledPaper>
  );
};

export default PostDetail;
