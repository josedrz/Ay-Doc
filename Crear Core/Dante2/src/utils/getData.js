
const getData = async () => {
  const apiURl = 'https://aydoc-peru-default-rtdb.firebaseio.com/borrador.json';
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