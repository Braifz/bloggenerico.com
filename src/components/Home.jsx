import React, { useState, useEffect } from 'react';
import { Text, Flex } from '@chakra-ui/react';
import getPosts from '../api/getPosts';

function Home() {
  const [state, setState] = useState({
    loading: false,
    posts: [],
    error: null,
  });

  const { loading, posts, error } = state;

  useEffect(() => {
    const doFetchPosts = async () => {
      setState({
        loading: true,
        posts: [],
        error: null,
      });
      try {
        const data = await getPosts();
        setState({
          loading: false,
          posts: data,
          error: null,
        });
      } catch (e) {
        setState({
          loading: false,
          posts: [],
          error: e.message,
        });
      }
    };

    doFetchPosts();
  }, []);

  return (
    <div>
      <Text fontSize="5xl" textAlign="center" p="20px">
        Posts
      </Text>
      {posts.map(item => (
        <Flex
          key={item.id}
          flexDir="column"
          p="20px"
          border="1px solid gray"
          borderRadius="10px"
          m="30px"
        >
          <Text fontSize="2xl" textStyle="bold" textAlign="center">
            {item.title}
          </Text>
          <p>{item.body}</p>
        </Flex>
      ))}
    </div>
  );
}

export default Home;
