import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v3/Header";
import Footer from "@/components/home/home-v3/footer";
import Image from "next/image";
import TableEnterprises from "@/components/home/home-v3/hero/EnterprisesTable";
import ImageCondominium from "@/components/home/home-v3/ExclusiveCondominium";
import Property from "@/components/location/property";
import Tabs from "@/components/location/tabs";
import Neighborhood from '@/components/location/neighborhood';
import Entrepreneurship from '@/components/location/entrepreneurship';
import Map from "@/components/home/home-v10/Map";
import PropertieComponent from "@/components/home/home-v3/propertie";
import HeaderV2 from "@/components/common/HeaderV2";

export const metadata = {
  title: "Emprendimientos",
};

const Home_V3 = () => {

  const tabs = [
    { id: "buy", label: "Establecimiento (3)" },
    { id: "rent", label: "Transporte y accesos" },
    { id: "sold", label: "Alquiler temporal" },
  ];

  const items = [
    { id: "1", title: "Escuela Primaria Nombre" },
    { id: "2", title: "Hospital" },
    { id: "3", title: "Banco" },
  ];

  return (
    <>
      {/* Main Header Nav */}
      <HeaderV2 />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}


      {/* Home Banner Style V3 */}
      <section className="home-banner-style3 p0">
        <div className="home-style3">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 text-center">
                <h1 style={{ fontSize: '50px', color: '#000' }} className="fw-normal">Condominio</h1>
                <h1 style={{ fontSize: '80px', color: '#000' }} className="fw-normal">Terrazas III</h1>
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

      <div className="container">
        <PropertieComponent />
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="100">
            <div className="text-start">
              <h4>¿Que podes encontrar en [Nombre de la localidad]?</h4>
            </div>
            <div className="home10-map">
              <Map />
            </div>
            <Tabs items={items} tabs={tabs} />
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="100">
            <div className="card mb-4 p-3">
              <div className="text-start">
                <p className="fw-bold">Más Información</p>
                <div className="row">
                  <div className="col-3">

                    <Image src='/images/home-v3/person.png' width={100} height={100} />
                  </div>
                  <div className="col-9">
                    <p className="fw-bold">Agente 1</p>
                    <p><i class="fa-regular fa-phone"></i> (920) 012-3421</p>
                    <p className="fw-bold">Ver Casas Listadas</p>
                  </div>
                </div>
              </div>
              <div className="w-100 d-grid justify-content-center">
                <button style={{ color: '#000', borderRadius: '0px', border: '1px solid #000' }} className="btn w-50 bg-white fw-bold w-100 me-2">CONTACTAR AGENTE</button>
              </div>
            </div>

            <div className="card p-4">
              <p className="fw-bold">Más Información</p>
              <p style={{ fontSize: '19px', lineHeight: '44px' }}>Hola, aquí pondremos información a cerca de los horarios de visita posible que ofrece JL ademas de las posibles ofertas qeu están dispuestos a recibir por permuta de una propiedad. </p>
            </div>
          </div>

          <div className="col-lg-6 wow fadeInUp" data-wow-delay="100">
            <div className="text-start">
              <button style={{ borderRadius: "0px", color: 'white' }} className="btn btn-primary mb-3 fw-bold">Solicitar una visita</button>
              <button style={{ borderRadius: "0px" }} className="btn btn-primary mb-3 fw-bold bg-white">Ofrecer permuta</button>

              <p>Elejí tu dia preferido</p>
              <button style={{ border: '1px solid #000', borderRadius: '0px' }} className="btn mb-3 fw-bold bg-white me-2">Llamada</button>
              <button style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-3 fw-bold bg-white me-2">En persona</button>

              <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Día y hora preferido" />
              <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Nombre" />
              <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Teléfono" />
              <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Email" />
              <textarea class="form-control mb-3" placeholder="Escríbenos" id="exampleFormControlTextarea1" rows="3"></textarea>
              <button style={{ color: 'white', borderRadius: '0px' }} className="btn fw-bold btn-primary w-25 me-2">Enviar Solicitud</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className='title'>
            <h4>Emprendimientos Similares</h4>
            <p>Si quieres invertir en tu casa del futuro aquí encontraras los emprendimientos que te ofrecemos</p>
          </div>
          <div className="col-lg-6">
            <div className='content'>
              <div className='gallery'>
                <Entrepreneurship />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className='content'>
              <div className='gallery'>
                <Entrepreneurship />
              </div>
            </div>
          </div>
          <p className='expand-button mt-3 mb-4 fw-bold text-center'><strong>Cargar Más</strong></p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className='title'>
            <h4>Otros Barrios que pueden Interesarte</h4>
            <p>Puedes guardar y seleccionar las que te gusten y compararlas</p>
          </div>
          <div className="buttons-group">
            <button style={{ border: '1px solid #DDDDDD', background: '#06173D', color: 'white', borderRadius: '0px' }} className="btn mb-3 me-2">Todos</button>
            <button style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-3 bg-white me-2">Abiertos</button>
            <button style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-3 bg-white me-2">Semi Cerrados</button>
            <button style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-3 bg-white me-2">Privados</button>
            <button style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-3 bg-white me-2">Country Club</button>
          </div>
          <div className="col-lg-6">
            <div className='content'>
              <div className='gallery'>
                <Neighborhood />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className='content'>
              <div className='gallery'>
                <Neighborhood />
              </div>
            </div>
          </div>
          <p className='expand-button mt-3 mb-4 text-center'><strong>Cargar Más</strong></p>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className='title'>
            <h4>Otras propiedades que te pueden interesar</h4>
            <p>Puedes guardar y seleccionar las que te gusten y compararlas</p>
          </div>
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
