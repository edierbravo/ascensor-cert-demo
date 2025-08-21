import { useState } from "react";
import { resizeBase64Img2, images } from "../utils/images";

export const TestPage = () => {
  const [photo, setPhoto] = useState(null);
  const [resizedPhoto, setResizedPhoto] = useState(null);

  const resizeImageCusttom = async (image64) => {
    setPhoto(image64);
    const resized = await resizeBase64Img2(image64, 300, 300);
    setResizedPhoto(resized);
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result;
        setPhoto(base64);

        // Reescalar imagen
        const resized = await resizeBase64Img2(base64, 300, 300);
        setResizedPhoto(resized);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handlePhotoChange} />

      <div className="flex flex-row gap-2">
        {photo && (
          <div>
            <h3>Original</h3>
            <img src={photo} alt="Original" style={{ maxWidth: "300px" }} />
          </div>
        )}

        {resizedPhoto && (
          <div>
            <h3>Reescalada</h3>
            <img
              src={resizedPhoto}
              alt="Reescalada"
              style={{ maxWidth: "300px" }}
            />
          </div>
        )}
      </div>

      <div className="border-2 border-red-500 p-2 mt-4">
        <button
          name="image"
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => resizeImageCusttom(images[0].image)}
        >
          Reescalar
        </button>

        {resizedPhoto && (
          <img
            src={resizedPhoto}
            alt="Reescalada"
            style={{ maxWidth: "300px" }}
          />
        )}
      </div>
    </>
  );
};
