const API = 'https://aydoc-peru-default-rtdb.firebaseio.com/';

const getDatac2 = async (id) => {
  const apiURl = id ? `${API}postsc2/${id}.json` : `${API}postsc2.json`;
  console.log(apiURl);
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getDatac2;