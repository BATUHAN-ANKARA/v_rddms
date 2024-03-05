import React from "react";
import Headers from "@/components/include/header";
 import MyForm from "@/components/contents/form";
import DataTable from "@/components/contents/table-ik";
import AsideIk from "@/components/include/aside-ik";
import AsideFinans from "@/components/include/aside-finans";

const Verigiris = () => {
  const formFields = [
   
    { name: "Ay ve Yıl Seçimi*", label: "Ay ve Yıl Seçimi*", type: "text" },
  { name: "Proje Adı*", label: "Proje Adı*", type: "text" },
  { name: "Personel*", label: "Personel*", type: "text" },
  { name: "Amortisman*", label: "Amortisman*", type: "text" },
  { name: "Kira*", label: "Kira*", type: "text" },
  { name: "Servis*", label: "Servis*", type: "text" },
  { name: "Yemek*", label: "Yemek*", type: "text" },
  { name: "Elektrik*", label: "Elektrik*", type: "text" },
  { name: "Su*", label: "Su*", type: "text" },
  { name: "Doğalgaz*", label: "Doğalgaz*", type: "text" },
  { name: "Telefon*", label: "Telefon*", type: "text" },
  { name: "Dahili Telefon*", label: "Dahili Telefon*", type: "text" },
  { name: "Ek*", label: "Ek*", type: "text" },
  { name: "Endirekt*", label: "Endirekt*", type: "text" },
  { name: "Hizmet*", label: "Hizmet*", type: "text" },
  { name: "İlk Madde Malzeme*", label: "İlk Madde Malzeme*", type: "text" },
  { name: "Kırtasiye*", label: "Kırtasiye*", type: "text" }

   ];
   

  return (
    <section className="">
      <AsideFinans />
      <div className="dashbords dashboardContent">
        
        <MyForm title="Finans - Muhasebe | Veri Girişi


" fields={formFields} />
      </div>
      <div className=" dashboardPaddings  ">
        <DataTable />
      </div>
    </section>
  );
};

export default Verigiris;
