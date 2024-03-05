import React from "react";
import Headers from "@/components/include/header";
import Aside from "@/components/include/aside";
import MyForm from "@/components/contents/form";
import DataTable from "@/components/contents/table-pasifealinanlar";
import AsideIk from "@/components/include/aside-ik";

const Tumprojeler = () => {
  const formFields = [
  
   ];
   

  return (
    <section className="">
      <AsideIk />
   
      <div className=" dashboardPaddings  ptyz">
        <DataTable />
      </div>
    </section>
  );
};

export default Tumprojeler;
