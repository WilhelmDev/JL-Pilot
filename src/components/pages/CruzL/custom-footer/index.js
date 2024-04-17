import Copyright from "./Copyright";
import Image from "next/image";
import SvgComponent from "../logo/reactlogo";

const FooterL = () => {
    return(
        <>
            <div className="container d-flex flex-row align-items-center justify-content-between">
                <div className="logo pb-5">
                    <SvgComponent/>
                </div>
                <div className="media w-25 d-flex flex-row-reverse">
                    <div className="d-flex justify-content-between w-50">
                        <Image src={"/images/CruzL/info/facebook.svg"} width={20} height={20} alt="facebook logo" className="icon-footer" />
                        <Image src={"/images/CruzL/info/instagram.svg"} width={20} height={20} alt="facebook logo" className="icon-footer" />
                        <Image src={"/images/CruzL/info/youtube.svg"} width={20} height={20} alt="facebook logo" className="icon-footer" />
                        <Image src={"/images/CruzL/info/spotify.svg"} width={20} height={20} alt="facebook logo" className="icon-footer" />
                    </div>
                </div>
            </div>
            <Copyright />
        </>
    )
}

export default FooterL;