"use client";

import React, { useEffect } from "react";
import Headers from "@/components/include/header";
import Aside from "@/components/include/aside";
import MyForm from "@/components/contents/form";
import DataTable from "@/components/contents/table";
import Box from "@/components/contents/box";


import { useRouter, useSearchParams } from "next/navigation";
import Sonprojeler from "../soneklenenler/page";
import AsideArge from "@/components/include/aside-arge";

const DashboardPage = () => {
  const formFields = [];
  const router = useRouter();
  const dataFromHomePage = router.options?.data;
  //const currenturl = window.location.href
  //console.log('=>', currenturl);

  console.log('Data from HomePage:', dataFromHomePage);

  return (
    <div>
    <section className="">
      <AsideArge />
      <div
        className="dashbords dashboardContent"
        style={{ backgroundColor: "#ffff" }}
      >
        <div className="dashboardStartGrid">
          <Box
            title="Çalışılan Proje Öngörülen ve Gerçekleşen Proje Gideri Grafiği

            "
            img="./img/1.png"
            counter="155"
          />
          <Box
            title="İlgili Dönemde Katılım Sağlanan Etkinlikler Grafiği

            "
            img="./img/2.png"            counter="34"
          />

          <Box
            title="İlgili Dönemde Çalıştığı Proje Fikri Sınai Haklar Grafiği

            "
            img="./img/3.png"            counter="45"
          />

          <Box
            title="İlgili Dönemde Aylık Devam - PDKS Grafiği

            "
            img="./img/4.png"            counter="66"
          />

          <Box
            title="İlgili Dönemde Dışarıda Geçirilen Süre Grafiği

            "
            img="./img/5.png"            counter="234"
          />

          <Box
            title="Mevcut Projelerin Proje Fikri Sınai Hak Grafiği

            "
            img="./img/6.png"            counter="534"
          />

          <Box
            title="Mevcut Projelerin Proje Personel Çalışma Grafiği






            "
            img="./img/7.png"            counter="99"
          />
        </div>
       
      </div>
      
    </section>
    
     
 
       </div>
    
  );
};

export default DashboardPage;
