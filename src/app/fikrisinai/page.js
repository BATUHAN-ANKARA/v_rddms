import React from "react";
import Headers from "@/components/include/header";
import Aside from "@/components/include/aside";
import MyForm from "@/components/contents/form";
import DataTable from "@/components/contents/table-fikrisinai";
import AsideArge from "@/components/include/aside-arge";

const Katilimlarigör = () => {
  const formFields = [
    { name: "tarih", label: "Tarih*", type: "date" },
    { name: "dosyaAdi", label: "Dosya Adı*", type: "select" },
    { name: "projeAdi", label: "Proje Adı*", type: "text" },
    { name: "projeKodu",  label: "Proje Kodu*", type: "number" },
    { name: "basvurutarihi", label: "Başvuru Tarihi*", type: "text" },

    { name: "dosyaTuru", label: "Dosya Türü*", type: "select" },
    { name: "btarih", label: "Başvuru Tarihi*", type: "date" },
    { name: "bisimleri", label: "Buluşçu İsimleri*", type: "text" },
    { name: "ttarih", label: "Tescil Tarihi*", type: "date" },
    { name: "kapsam", label: "Kapsam Türü*", type: "select" },
    { name: "uluslararasi", label: "Uluslararası*", type: "text" },

   ];
   

  return (
    <section className="">
      <AsideArge/>
      <div className="dashbords dashboardContent">
        
        <MyForm title="Fikri Sınai Haklar

" fields={formFields} />
      </div>
      <div className=" dashboardPaddings  ">
        <DataTable />
      </div>
    </section>
  );
};

export default Katilimlarigör;
