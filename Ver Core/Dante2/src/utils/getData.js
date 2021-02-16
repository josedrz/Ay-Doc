const API = 'https://aydoc-peru-default-rtdb.firebaseio.com/';

const getData = async (id) => {
  const apiURl = id ? `${API}posts/${id}.json` : `${API}posts.json`;
  console.log(apiURl);
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;