import Footer from "@/components/common/default-footer";
import General from "@/components/luisbravo/General";
import ButtonLocation from "@/components/luisbravo/General/ButtonLocation";
import HeaderBienesRaices from "@/components/luisbravo/Header";
import Information from "@/components/luisbravo/Information";
import LocationMap from "@/components/luisbravo/LocationMap";
import OtherProperties from "@/components/luisbravo/OtherProperties";
import Image from "next/image";
import Entrepreneurships from "@/components/luisbravo/Entrepreneurship";
import OtherNeighborhoods from "@/components/luisbravo/OtherNeighborhoods";
import Other from "@/components/luisbravo/Other";
import FormCTA from "@/components/luisbravo/FormCTA";
// import Image from "next/image";
// import Link from "next/link";

export const metadata = {
  title: "Pague Lucho  || Homez - Real Estate NextJS Template",
};

const PageLuis = () => {
  return (
    <>
    {/* Start Header */}

    <HeaderBienesRaices/>

    {/* Start Header */}


      <section className="carousel">
        <Image
          width={1920}
          height={900}
          className="w-100 h-100 cover img"
          src="/images/neighborhood/header_neighborhood.png"
          alt="neighborhood image"
        />
      </section>

      <section className="section-property">
        <div className="btn-property">
          <ButtonLocation>solicitar una visita</ButtonLocation>
          <ButtonLocation>ofrecer permuta</ButtonLocation>
        </div>

        <General
          neighborhoodName="Nombre de barrio"
          local="Partido"
          location="Localidad"
          neighborhoodLocation="Ubicacion del Bario"
          minPrice="140.000USD"
          maxPrice="200.000USD"
          lotsAvailable="90"
          distance="70"
          type="5"
        />

        {/* Start Information */}
        <Information
          descNeighborhood="descripcion generica"
        />
        {/* End Information */}

        {/* Start Other Properties */}

        <OtherProperties/>

        {/* End Other Properties */}

        {/* Start Location */}

        <LocationMap nameLocation="[Nombre de la localidad]" />

        {/* End Location */}

        {/* Start Form */}

        <FormCTA/>

        {/* End Form */}

        {/* Start Entrepreneurships */}

        <Entrepreneurships/>

        {/* End Entrepreneurships */}

        {/* Start Other Neighborhoods */}

        <OtherNeighborhoods/>

        {/* End Other Neighborhoods */}

        {/* Start Other */}

        <Other/>

        {/* End Other */}

      </section>
      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default PageLuis;
