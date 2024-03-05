import React from "react";
import Headers from "@/components/include/header";
 import MyForm from "@/components/contents/form";
import DataTable from "@/components/contents/table";
import AsideArge from "@/components/include/aside-arge";

const Projeduzenleargekullanici = () => {
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
    { name: "gerceklesenCiktilar", label: "Gerçekleşen Çıktılar*", type: "text" },
    { name: "gerceklesenBitisTarihi", label: "Gerçekleşen Bitiş Tarihi*", type: "date" },
    { name: "sartnameveText", label: "Projeye Ait Şartname,Standart ve Test Kriterleri*", type: "text" },
    { name: "yapilanDeneme", label: "Yapılan Deneme Çalışmaları ve Açıklamaları*", type: "text" },
    { name: "musteriSiparis", label: "Müşteri ve Sipariş Adedi Bilgisi*", type: "text" },
    { name: "yapilanFaaliyet", label: "Yapılan Faaliyet Açıklaması*", type: "text" },
    { name: "faaliyetSonucu", label: "Faaliyet Sonucu Ortaya Çıkan Çıktı*", type: "text" },
    { name: "alimiYapilanHizmet", label: "Alımı Yapılan Hizmet ve Mallar*", type: "text" },
    { name: "alimTarihi", label: "Alım Tarihi*", type: "date" },
    { name: "alimtutari", label: "Alım Tutarı*", type: "number" },
    { name: "fikriSinai", label: "Fikri Sınai Başvurusu*", type: "text" },
    { name: "turu", label: "Türü*", type: "select" },
    { name: "basvuruTarihi", label: "Başvuru Tarihi*", type: "date" },

    { name: "basvuruNo", label: "Başvuru Numarası*", type: "number" },
    { name: "dosyaAdi", label: "Dosya Adı*", type: "text" },
    { name: "admissionNumber", label: "Admission Number*", type: "number" },



   ];
   

  return (
    <section className="">
      <AsideArge/>
      <div className="dashbords dashboardContent">
        
        <MyForm title="Proje Düzenle" fields={formFields} />
      </div>
      <div className=" dashboardPaddings  ">
        <DataTable />
      </div>
    </section>
  );
};

export default Projeduzenleargekullanici;
