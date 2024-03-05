import React from "react";
import Headers from "@/components/include/header";
 import MyForm from "@/components/contents/form";
import DataTable from "@/components/contents/table-etkinlikler";
import AsideArge from "@/components/include/aside-arge";

const KatilimEkle = () => {
  const formFields = [
    { name: "tc", label: "TC No*", type: "date" },
    { name: "tarih", label: "Tarih*", type: "text" },
    { name: "projeKodu", label: "Proje Kodu*", type: "number" },
    { name: "projeAdi", label: "Proje Adı*", type: "text" },
     { name: "projeCalisma", label: "Başlangıç Tarihi*", type: "text" },
    { name: "gunlukCalisma", label: "Bitiş Tarihi*", type: "text" },
    { name: "aciklama",label: "Etkinlik Yeri*", type: "text" },
    { name: "evdenCalisma", label: "Etkinliği Sağlayan Kuruluş Adı*", type: "text" },
    { name: "ozelDurum", label: "Katılım Şekli*", type: "select" },
    
   ];
   

  return (
    <section className="">
      <AsideArge />
      <div className="dashbords dashboardContent">
        
        <MyForm title="Arge Kullanıcı | Katılım Sağlanan Etkinlikler
" fields={formFields} />
      </div>
      <div className=" dashboardPaddings  ">
        <DataTable />
      </div>
    </section>
  );
};

export default KatilimEkle;
