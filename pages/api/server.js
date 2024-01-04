import axios from 'axios';

const base_url = process.env.API_BASE_URL;

//admin login
export const adminlogin = async(email, pass) => {
  try {
    const al = await axios.post(`${base_url}/admin/login`, {
      email: email,
      pass: pass
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return al.data;
  } catch(err) {
    return({ error: 'Internal Server Error.' });
  }
}

//get all gallery data
export const gallery = async() => {
  try {
    const getg = await axios.get(`${base_url}/gallery/getalldata`);

    return getg.data;
  } catch(err) {
    return({ error: 'Internal Server Error.' });
  }
}