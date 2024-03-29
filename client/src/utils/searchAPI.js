import axios from 'axios';

const API_KEY = 'AIzaSyDfge1H72PdzT-RqnDtZL_LDjp5c2Oc_yA'; // FIX: MAKE PRIVATE

const searchBooks = async (query) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&projection=lite&key=${API_KEY}`
    );
    console.log(response.data);
    return response.data.items;
  };

export default searchBooks;