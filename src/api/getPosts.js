const getPosts = async () => {
  const response = await window.fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (!response.ok) {
    throw new Error(
      'Estamos teniendo problemas con nuestro servidor, por favor intenta luego'
    );
  } else {
    return response.json();
  }
};

export default getPosts;
