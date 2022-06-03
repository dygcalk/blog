const posts = [
  {
    title: 'Post 1',
    description: 'Post 1 description',
    image: 'post1-img',
  },
  {
    title: 'Post 2',
    description: 'Post 2 description',
    image: 'post2-img',
  },
  {
    title: 'Post 3',
    description: 'Post 3 description',
    image: 'post3-img',
  },
];

function getPosts() {
  console.log(posts);
}

function addPosts(newPosts) {
  return new Promise((resolve, reject) => {
    posts.push(newPosts);
    resolve(posts);
    reject('Bir hata oluştu');
  });
}

async function fetchData() {
  try {
    getPosts();
    await addPosts({
      title: 'Post 4',
      description: 'Post 4 description',
      image: 'post4-img',
    });
    getPosts();
  } catch (error) {
    console.log(error);
  }
}

fetchData();
