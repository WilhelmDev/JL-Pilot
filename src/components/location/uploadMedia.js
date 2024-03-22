import React from "react";
import UploadPhotoGallery from "../property/dashboard/dashboard-add-property/upload-media/UploadPhotoGallery";
import VideoOptionFiledCustom from "./videoOption";

const UploadMediaCustom = () => {
  return (
    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">Upload photos of your property</h4>
      <form className="form-style1">
        <div className="row">
          <div className="col-lg-12">
            <UploadPhotoGallery />
          </div>
        </div>
        {/* End col-12 */}

        <div className="row">
          <VideoOptionFiledCustom/>
        </div>
        {/* End .row */}

        <div className="row">
          <div className="col-12">
            <div className="mb30 buttton-container-custom">
              <button>publicar</button>
            </div>
          </div>
        </div>
        {/* End .row */}
      </form>
    </div>
  );
};

export default UploadMediaCustom;
