import axios from 'axios';

const base_url = process.env.API_BASE_URL;

//student login
export const student_login = async (email, pass) => {

  try {
    const response = await axios.post(`${base_url}/student/login`, {
      lemail: email,
      lpass: pass,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response) {
      const data = response.data;
      return data;
    }

  } catch (error) {
    console.error('Error:', error);
  }

};

//coach login
export const coach_login = async (email, pass) => {

  try {
    const clogin = await axios.post(`${base_url}/coach/login`,
      {
        lemail: email,
        lpass: pass
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });

    if (clogin) {
      const clogin_data = clogin.data;
      return clogin_data;
    }

  } catch (err) {
    console.log(err);
  }

};

//admin login
export const admin_login = async (email, pass) => {

  try {
    const alogin = await axios.post(`${base_url}/admin/login`,
      {
        loginemail: email,
        loginpassword: pass,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      });

    if (alogin) {
      const alogin_data = alogin.data;
      return alogin_data;
    }
  } catch (err) {
    console.log(err);
  }

};

//student login
export const student_login_details = async (id, token) => {

  try {

    const user_details = await axios.get(`${base_url}/student/getstudent`,
      {
        params: {
          sreqid: id,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }
    );

    if (user_details) {
      const udata = user_details.data;
      return udata;
    }
  } catch (err) {
    console.log("Error While fetching from DB.");
  }

};

//student data
export const student_data_details = async (id, token) => {

  try {

    const udetails = await axios.get(`${base_url}/studentdata/studentdata`,
      {
        params: {
          sdreqid: id,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

    if (udetails) {
      return udetails.data;
    }
  } catch (err) {
    console.log(err);
  }
}

//coach data
export const coach_login_details = async (id, token) => {

  try {
    const c_login_detail = await axios.get(`${base_url}/coach/singlecoach`, {
      params: {
        reqid: id,
      },
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      }
    });

    if (c_login_detail) {
      return c_login_detail.data;
    }
  } catch (err) {
    console.log(err);
  }

};

//notification
export const notification = async (token) => {

  try {

    const msgs = await axios.get(`${base_url}/notify/allmessages`,
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        }
      });

    if (msgs) {
      return msgs.data;
    }

  } catch (err) {
    console.log(err);
  }

};

//payment
export const payment_api = async (token, sid, paymentid, plan) => {

  try {
    const pay = await axios.post(`${base_url}/payment/payment`,
      {
        sid: sid,
        paymentId: paymentid,
        plan: plan
      },
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        }
      }
    );

    if (pay) {
      return pay.data;
    }
  } catch (err) {
    console.log(err);
  }

};

//all payments
export const all_payments = async (token, id) => {
  try {
    const payments = await axios.get(`${base_url}/payment/allpayments`,
      {
        params: {
          sreqid: id,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

    if (payments) {
      return payments.data;
    }
  } catch (err) {
    console.log(err);
  }
}

//register student
export const student_register = async (rname, remail, rpass, rid) => {
  try {

    const r_student = await axios.post(`${base_url}/student/register`,
      {
        headers: {
          'Content-type': 'application/json',
        },
        rname: rname,
        remail: remail,
        rpassword: rpass,
        rid: rid
      });

    if (r_student.data) {
      return r_student.data;
    }
  } catch (err) {
    console.log(err);
  }
}

//register coach
export const coach_register = async (token, name, email, pass, id) => {
  try {
    const cregister = await axios.post(`${base_url}/coach/register`,
      {
        rname: name,
        remail: email,
        rpass: pass,
        rid: id,
      },
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        },
      },);

    if (cregister.data) {
      return cregister.data;
    }
  } catch (err) {
    console.log(err);
  }
}

//all students
export const all_students = async () => {
  try {
    const getallstudents = await axios.get(`${base_url}/student/getallstudents`,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      });

    if (getallstudents.data) {
      return getallstudents.data;
    }
  } catch (err) {
    console.log(err);
  }
}

//all coaches
export const all_coaches = async (token) => {
  try {
    const getallcoaches = await axios.get(`${base_url}/coach/allcoaches`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization : token
        }
      });

    if (getallcoaches.data) {
      return getallcoaches.data;
    }
  } catch (err) {
    console.log(err);
  }
}