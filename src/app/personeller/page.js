import React from "react";
import Headers from "@/components/include/header";
 import MyForm from "@/components/contents/form";
import DataTable from "@/components/contents/table-ik";
import AsideIk from "@/components/include/aside-ik";

const Personeller = () => {
  const formFields = [
    { name: "tc", label: "TC No*", type: "text" },
  { name: "ad", label: "Ad*", type: "text" },
  { name: "soyad", label: "Soyad*", type: "text" },
  { name: "mezuniyet", label: "Mezuniyet*", type: "text" },
  { name: "okul", label: "Okul*", type: "text" },
  { name: "okulBolum", label: "Okul Bölüm*", type: "text" },
  { name: "mezuniyetTarihi", label: "Mezuniyet Tarihi*", type: "text" },
  { name: "firmaGirisBilgileri", label: "Firma Giriş Bilgileri*", type: "text" },
  { name: "firmaGirisTarihi", label: "Firma Giriş Tarihi*", type: "text" },
  { name: "firmaCikisBilgileri", label: "Firma Çıkış Bilgileri*", type: "text" },
  { name: "firmaCikisTarihi", label: "Firma Çıkış Tarihi*", type: "text" },
  { name: "argeGirisBilgileri", label: "Arge Giriş Bilgileri*", type: "text" },
  { name: "argeGirisTarihi", label: "Arge Giriş Tarihi*", type: "text" },
  { name: "argeCikisBilgileri", label: "Arge Çıkış Bilgileri*", type: "text" },
  { name: "argeCikisTarihi", label: "Arge Çıkış Tarihi*", type: "text" },
  { name: "argePozisyonu", label: "Arge Merkezindeki Pozisyonu*", type: "text" },
  { name: "argeKategorisi", label: "Arge Merkezindeki Kategorisi*", type: "text" },
  { name: "argeBagliKisi", label: "Arge Merkezinde Bağlı Olduğu Kişi*", type: "text" },
  { name: "gunlukCalismaSistemi", label: "Günlük Çalışma Sistemi*", type: "text" },
  { name: "personelKategorisi", label: "Personel Kategorisi*", type: "text" },
  { name: "personelCalismaSistemi", label: "Personel Çalışma Sistemi*", type: "text" },
  { name: "cinsiyet", label: "Cinsiyet*", type: "text" },
  { name: "dogumTarihi", label: "Doğum Tarihi*", type: "text" },
  { name: "admissionNumber", label: "Admission Number*", type: "text" }

    
   ];
   

  return (
    <section className="">
      <AsideIk />
      <div className="dashbords dashboardContent">
        
        <MyForm title="İnsan Kaynakları | Personel Mali Bilgileri


" fields={formFields} />
      </div>
      <div className=" dashboardPaddings  ">
        <DataTable />
      </div>
    </section>
  );
};

export default Personeller;
