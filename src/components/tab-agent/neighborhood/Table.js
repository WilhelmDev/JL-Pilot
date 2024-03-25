"use client";
import React from "react";
import Image from "next/image";
import profilePic from "../../../../public/images/tab-agent/CasasDeChamba.png";
import HeartButton from "./HeartButton";
import { PencilIcon, ShareIcon, TrashIcon } from "../Icon";

export default function TableTabAgent() {
  return (
    <>
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th className="bg-white">Propiedad y detalles</th>
            <th className="bg-white">Precio x Operacion</th>
            <th className="bg-white">Solicitudes</th>
            <th className="bg-white">Ultima Accion</th>
            <th className="bg-white">Favoritos y Compartidos</th>
            <th className="bg-white">Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="col-3">
              <div className="d-flex align-items-center">
                <Image src={profilePic} alt="Casas" width={167} height={143} />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Nombre del barrio</p>
                  <p className="text-muted mb-0">Tipo de barrio</p>
                  <p className="text-muted mb-0">Localidad</p>
                </div>
              </div>
            </td>
            <td>
              <div className="d-grid gap-2 col-5 ms-3">
                <div className="btn-sm bg-custom not-border-color small">
                  <span className="d-flex justify-content-center fw-bold">
                    16
                  </span>
                  <p className="d-flex justify-content-center">propiedades</p>
                </div>
                <div className="btn-sm bg-custom not-border-color small">
                  <span className="d-flex justify-content-center fw-bold">
                    2
                  </span>
                  <p className="d-flex justify-content-center">
                    emprendimientos
                  </p>
                </div>
                <div className="btn btn-secondary btn-sm bt-custom2 text-uppercase small">
                  <p className="fw-bold">Ver lista</p>
                </div>
              </div>
            </td>
            <td>
              <div className="d-grid gap-2 col-9">
                <p class="p-2 mb-2 bg-primary text-white">2 Visitas</p>
                <p class="p-2 mb-2 bg-primary text-white">1 Permuta</p>
                <p class="p-2 mb-2 bg-primary text-white">1 Tasación</p>
              </div>
            </td>
            <td>
              <p className="me-4">nombre de usuarioS solicito una visita</p>
            </td>
            <td>
              <div className="d-grid gap-2 col-4 m-5">
                <HeartButton />2 Favorito
                <button className="share-button">
                  <ShareIcon />
                </button>
                Compartido 10
              </div>
            </td>
            <td>
              <button class="btn btn-outline-dark">
                <TrashIcon />
              </button>
              <button class="btn btn-outline-dark">
                <ShareIcon />
              </button>
              <button class="btn btn-outline-dark">
                <PencilIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
