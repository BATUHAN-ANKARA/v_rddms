import React from "react";
import Headers from "@/components/include/header";
 import MyForm from "@/components/contents/form";
import DataTable from "@/components/contents/table-personelmail";
import AsideIk from "@/components/include/aside-ik";

const PersonelMail = () => {
  const formFields = [
    { name: "tc", label: "TC No*", type: "text" },
    { name: "ad", label: "Ad*", type: "text" },
    { name: "soyad", label: "Soyad*", type: "text" },
    { name: "mezuniyet", label: "Mezuniyet*", type: "text" },
    { name: "okul", label: "Okul*", type: "text" },
    { name: "okulBolum", label: "Okul Bölüm*", type: "text" },
    { name: "temelBilimlerMezunu", label: "Temel Bilimler Mezunu*", type: "text" },
    { name: "firmaGirisBilgileri", label: "Firma Giriş Bilgileri*", type: "text" },
    { name: "aylikBrutUcret", label: "Aylık Brüt Ücret*", type: "text" },
    { name: "sgkIsverenTutari", label: "SGK İşveren Tutarı*", type: "text" },
    { name: "issizlikIsverenTutari", label: "İşsizlik İşveren Tutarı*", type: "text" },
    { name: "gelirVergisiTesvigi", label: "Gelir Vergisi Teşviği*", type: "text" },
    { name: "damgaVergisiTesvigi", label: "Damga Vergisi Teşviği*", type: "text" },
    { name: "indirimliTutar", label: "İndirimli Tutar*", type: "text" },
  
    
   ];
   

  return (
    <section className="">
      <AsideIk />
      <div className="dashbords dashboardContent">
        
        <MyForm title="Yeni Personel Ekle

" fields={formFields} />
      </div>
      <div className=" dashboardPaddings  ">
        <DataTable />
      </div>
    </section>
  );
};

export default PersonelMail;
