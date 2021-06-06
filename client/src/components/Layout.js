import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Layout(props) {
  const [token, setToken] = useState(null);

  async function getToken() {
    try {
      let res = await axios.get("/api/token");
      let token = res?.data?.token || false;
      setToken(token);
    } catch (error) {
      setToken(false);
    }
  }

  useEffect(() => {
    getToken();
  }, []);

  if (token === null) {
    return <h1>Loading....</h1>;
  }

  if (!token) {
    return <Redirect to="/" />;
  }

  return <div className="Layout">{props.children}</div>;
}

export default Layout;
