"use client";

import React, { useEffect, useState } from "react";

const Sign = () => {
  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    alert(`Rol: ${role}, Kullanıcı Adı: ${username}, Şifre: ${password}`);
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
            <h1>RDDMS PROJE YÖNETİM SİSTEMİ
</h1>
            <h2>Kullanıcı</h2>
            <div>
              <select value={role} onChange={handleRoleChange}>
                <option value="Arge Admin">Arge Admin</option>
                <option value="Arge Kullanıcı">Arge Kullanıcı</option>
                <option value="İnsan Kaynakları">İnsan Kaynakları</option>
                <option value="Finans ve Muhasebe">Finans ve Muhasebe</option>


              </select>
            </div>
            <div className="mt-5">
              <label>Adınız Soyadınız</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
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
            <div>
              <span className="loginText">Zaten hesabın var mı?<a href="/login"> Giriş yap</a> </span>
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

export default Sign;
