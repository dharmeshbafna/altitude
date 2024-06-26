import axios from 'axios';

// server url
const base_url = 'https://server.altitudesports.in';
// const base_url = 'http://localhost:5000';

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

// get all cloudinary data
export const cfetch = async () => {
  const res = await axios.get(`${base_url}/gallery/cfetch`);

    if(res.data) {
      return res.data;
    } else {
      return({ error: 'Internal Server Error.' });
    }
}
