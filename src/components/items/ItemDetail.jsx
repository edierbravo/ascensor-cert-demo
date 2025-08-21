import { getIconByBolean } from "../../utils/utils";
import { useEffect, useState } from "react";
import { Image, Alert } from "@heroui/react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useEvaluation } from "../../hooks/useEvaluation";
import { RiErrorWarningFill } from "react-icons/ri";
import { resizeBase64Img2 } from "../../utils/images";
import { useItem } from "../../hooks/useItem";
import { getIconColor } from "./DefectItemsDescription";
import { IoClose } from "react-icons/io5";

// const images = [
//   "https://heroui.com/images/hero-card-complete.jpeg",
//   "https://heroui.com/images/album-cover.png",
//   "https://heroui.com/images/fruit-1.jpeg",
// ];

export const ItemDetail = () => {
  const { evaluationSelected } = useEvaluation();
  const { itemSelected } = useItem();
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const images = evaluationSelected?.images || [];
  const [resizedPhoto, setResizedPhoto] = useState(null);

  const resizeImageCusttom = async (image64) => {
    const resized = await resizeBase64Img2(image64, 300, 300);
    setResizedPhoto(resized);
  };

  useEffect(() => {
    resizeImageCusttom(images[0]);
    setCurrent(0);
  }, [evaluationSelected, itemSelected]);

  console.log(evaluationSelected);
  if (!evaluationSelected) {
    return (
      <Alert
        hideIconWrapper
        className="bg-yellow-100 text-yellow-700 max-h-15 p-2 m-2"
        icon={<RiErrorWarningFill />}
        title={`No hay detalles para mostrar, selecione un Item de la lista`}
        variant={"flat"}
      />
    );
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resizeImageCusttom(images[current - 1]);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resizeImageCusttom(images[current + 1]);
  };

  return (
    <div className="flex flex-col gap-2 p-1">
      {/* Fila 1 */}
      <div className="flex flex-row gap-2">
        {/* Columna izquierda */}
        <div className="flex flex-col gap-2 w-fit shrink-0 min-w-25 max-w-25">
          <span className="px-2 py-1 bg-gray-100 rounded-lg text-sm font-bold text-center">
            {itemSelected?.code}
          </span>

          <span
            className={`flex items-center justify-center h-6 rounded-full ${getIconColor(
              itemSelected?.defect
            )} text-white font-bold text-sm`}
          >
            {itemSelected?.defect}
          </span>

          <span className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-lg text-sm font-medium">
            Estado {getIconByBolean(evaluationSelected?.status || false)}
          </span>
        </div>

        {/* Descripción */}
        <p className="flex-1 px-2 py-1 bg-gray-100 rounded-lg text-sm leading-snug">
          {itemSelected?.description}
        </p>
      </div>

      {/* Fila 2 */}
      <div
        className={`flex flex-row gap-2 ${
          !evaluationSelected?.status || "hidden"
        }`}
      >
        <span className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-lg text-sm font-medium min-w-25 max-w-25">
          Corregido {getIconByBolean(evaluationSelected?.corrected || false)}
        </span>

        <span className="flex-1 px-2 py-1 bg-gray-100 rounded-lg text-sm leading-snug italic text-gray-600">
          Observación: {evaluationSelected?.observation || "N/A"}
        </span>
      </div>

      {/* Carrusel de imágenes */}
      {images.length != 0 ? (
        <div
          className={`relative w-full max-w-lg mx-auto aspect-video ${
            evaluationSelected?.status ? "hidden" : ""
          }`}
        >
          <div className="flex justify-center aling-center text-sm font-semibold">
            <span>{`${current + 1} de ${images.length} foto(s)`}</span>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-m w-full h-full relative flex justify-center">
            <Image
              alt={`Imagen ${current + 1}`}
              src={resizedPhoto}
              className="object-contain w-full h-full cursor-pointer"
              onClick={() => setZoomed(true)}
            />
          </div>

          {/* Botones prev/next */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/15 hover:bg-black/20 text-gray-900 p-2 rounded-full shadow-lg transition z-10"
          >
            <GrPrevious className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/15 hover:bg-black/20 text-gray-900 p-2 rounded-full shadow-lg transition z-10"
          >
            <GrNext className="w-5 h-5" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center pt-2 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
                  idx === current ? "bg-green-600 scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <Alert
          hideIconWrapper
          className="bg-yellow-100 text-yellow-700 max-h-15 p-2 m-2"
          icon={<RiErrorWarningFill />}
          title={`No hay imagenes para mostrar`}
          variant={"flat"}
        />
      )}

      {/* Overlay “lightbox” fijo */}
      {zoomed && (
        <div className="fixed inset-0 bg-black/82 flex items-center justify-center z-[9999]">
          {/* Botón cerrar */}
          <button
            className="absolute top-7 right-7 text-white text-5xl"
            onClick={() => setZoomed(false)}
          >
            <IoClose />
          </button>

          {/* Botón anterior */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
          >
            <GrPrevious className="w-6 h-6" />
          </button>

          {/* Imagen ampliada */}
          <img
            src={resizedPhoto}
            alt="Vista ampliada"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />

          {/* Botón siguiente */}
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
          >
            <GrNext className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};
