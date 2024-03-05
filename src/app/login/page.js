"use client";

import React, { useEffect, useState, useNavigate } from "react";
import axios from "axios";
import { useRouter, useSeParams } from "next/navigation";
const Login = () => {
  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const router = useRouter();
  //const [userId, setUserId] = useState("");

  //const navigate = useNavigate();

  var data = {
    'username': username,
    'password': password
  }

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    console.log(username, password);

    try {
      const response = await axios.post(
        "https://aydanmak-10ed1c3dbb2a.herokuapp.com/api/v1/user/login", data
        // {
        //   email: username,
        //   password: password,
        // }
      ).then((res) => {
        localStorage.setItem('username', res.data.username);
        localStorage.setItem('password', res.data.password);
        //setUserId(res.data.data.json._id)
        //router.push(`/dashboard?id:${userId}`, {});
        //navigate()
        console.log("data",res.data);
      });
      //window.location.href="/dashboard"

    } catch (error) {
      console.log("error=>", error);
    }
  };

  return (
    <section className="bgBlue">
      <div className="container-fluid">
        <div className="loginFlex">
          <div className="loginImg">
            <img
              src="https://images.unsplash.com/photo-1518631031670-67cd2ca40ad5?auto=format&fit=crop&q=80&w=386&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Görsel"
            />
          </div>
          <div className="loginScreen ">
            <h1>RDDMS PROJE YÖNETİM SİSTEMİ</h1>
            <h2>Kullanıcı</h2>
            <div>
              <select value={role} onChange={handleRoleChange}>
                <option value="Arge Admin">Arge Admin</option>
                <option value="Arge Kullanıcı">Arge Kullanıcı</option>
                <option value="İnsan Kaynakları">İnsan Kaynakları</option>
                <option value="Finans ve Muhasebe">Finans ve Muhasebe</option>
              </select>
            </div>
            <div>
              <label>E-posta</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label>Şifre:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button className="login-button" onClick={handleLogin}>
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
