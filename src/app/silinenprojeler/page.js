import React from "react";
import Headers from "@/components/include/header";
import Aside from "@/components/include/aside";
import MyForm from "@/components/contents/form";
import DataTable from "@/components/contents/table";

const Kapananprojeler = () => {
  const formFields = [
    { name: "projeBaslamaTarihi", label: "Proje Başlama Tarihi", type: "date" },
    { name: "hibeliProjeKurumAdi", label: "Hibeli Proje Kurum Adı*", type: "text" },
    { name: "hibeliProjeKurumKodu", label: "Hibeli Proje Kurum Kodu*", type: "number" },
    { name: "projeAdi", label: "Proje Adı*", type: "text" },
    { name: "projeKodu",  label: "Proje Kodu*", type: "number" },
    { name: "projeKonuOzeti", label: "Proje Konusu ve Özeti*", type: "text" },
    { name: "projeBelirleyenIhtiyaclar", label: "Projeyi Belirleyen İhtiyaçlar*", type: "text" },
    { name: "argeIcerigi",label: "Arge İçeriği*", type: "text" },
    { name: "projeSorumlusu", label: "Proje Sorumlusu*", type: "select" },
    { name: "projeCalisani", label: "Proje Çalışanı*", type: "text" },
    { name: "ongorulenButce",label: "Öngörülen Bütçe*", type: "number" },
    { name: "ongorulenAdamAy", label: "Öngörülen Adam/Ay*", type: "number" },
    { name: "ongorulenBitisTarihi", label: "Öngörülen Bitiş Tarihi*", type: "date" },

   ];
   

  return (
    <section className="">
      <Aside />
      
      <div className="dashbords dashboardContent">
        
        <MyForm title="Silinen Projeler" fields={formFields} />
      </div>
      <div className=" dashboardPaddings  ">
        <DataTable />
      </div>
    </section>
  );
};

export default Kapananprojeler;
