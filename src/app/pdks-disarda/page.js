import React from "react";
import Headers from "@/components/include/header";
 import MyForm from "@/components/contents/form";
import DataTable from "@/components/contents/table-pdks";
import AsideArge from "@/components/include/aside-arge";

const Pdksgunluk = () => {
  const formFields = [
    { name: "tc", label: "TC No*", type: "date" },
    { name: "tarih", label: "Tarih*", type: "text" },
    { name: "projeKodu", label: "Proje Kodu*", type: "number" },
    { name: "projeAdi", label: "Proje Adı*", type: "text" },
     { name: "projeCalisma", label: "Projede Çalışma Süresi*", type: "text" },
    { name: "gunlukCalisma", label: "Günlük Çalışma Süresi*", type: "text" },
    { name: "aciklama",label: "Açıklama*", type: "text" },
    { name: "evdenCalisma", label: "Evden Çalışma*", type: "text" },
    { name: "ozelDurum", label: "Özel Durum*", type: "select" },
    
   ];
   

  return (
    <section className="">
      <AsideArge />
      <div className="dashbords dashboardContent">
        
        <MyForm title="PDSK Puantaj İşlemleri | Günlük Yapılan İşler
" fields={formFields} />
      </div>
      <div className=" dashboardPaddings  ">
        <DataTable />
      </div>
    </section>
  );
};

export default Pdksgunluk;
