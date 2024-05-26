import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPosts, fetchUsers } from '../services/api';

const TimelineContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const PostCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const PostBody = styled.p`
  color: #555;
`;

const Timeline = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [postsData, usersData] = await Promise.all([
          fetchPosts(),
          fetchUsers(),
        ]);
        setPosts(postsData.sort((a, b) => b.id - a.id));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const getUserById = (userId) => users.find((user) => user.id === userId);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <TimelineContainer>
      {posts.map((post) => {
        const user = getUserById(post.userId);
        return (
          <PostCard key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
            <p>Posted by: {user ? user.name : 'Unknown'}</p>
          </PostCard>
        );
      })}
    </TimelineContainer>
  );
};

export default Timeline;
