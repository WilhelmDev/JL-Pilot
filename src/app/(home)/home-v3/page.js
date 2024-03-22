import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v3/Header";
import Hero from "@/components/home/home-v3/hero/EnterprisesTable";
import Footer from "@/components/home/home-v3/footer";
import Image from "next/image";
import Partner from "@/components/common/Partner";
import PropertyByCities from "@/components/home/home-v3/PropertyByCities";
import ApartmentType from "@/components/home/home-v3/ApartmentType";
import WhyChoose from "@/components/home/home-v3/why-choose";
import Testimonial from "@/components/home/home-v3/Testimonial";
import Funfact from "@/components/home/home-v3/Funfact";
import Blog from "@/components/common/Blog";
import Cta from "@/components/home/home-v3/Cta";
import InqueryForm from "@/components/home/home-v3/InqueryForm";
import Link from "next/link";
import PropertyByCitiesWrapper from "@/components/home/home-v3/PropertyByCitiesWrapper";
import TableEnterprises from "@/components/home/home-v3/hero/EnterprisesTable";
import ImageCondominium from "@/components/home/home-v3/ExclusiveCondominium";
import Property from "@/components/location/property";

export const metadata = {
  title: "Home v3 || Homez - Real Estate NextJS Template",
};

const Home_V3 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V3 */}
      <section className="home-banner-style3 p0">
        <div className="home-style3">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
              </div>
              {/* End .col-xl-8 */}

              <div className="col-xl-4 d-none d-xl-block">
                <div className="home3-img-box1">

                </div>
              </div>
              {/* End .col-xl-4 */}
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V3 */}

      {/* this is the component of the entrepreneurship table */}
      <TableEnterprises />
      {/* End Our Partners */}

      {/* this is the component of the entrepreneurship table */}
      <ImageCondominium />
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6">
            <Property />
          </div>
          <div className="col-lg-6">
            <Property />
          </div>
        </div>
      </div>

      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
    </>
  );
};

export default Home_V3;
