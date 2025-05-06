"use client";
import { Player } from "@/config/type";
import Image from "next/image";
import { useState } from "react";
import { FaPhotoFilm } from "react-icons/fa6";
import { FiUploadCloud } from "react-icons/fi";

// Reusable PlayerCard component
export const PlayerCard: React.FC<Player> = ({ name, image, dataPlayer, className }) => {
  return (
    <div
      className={`card bg-base-100 items-center p-5 shadow-2xl mt-2.5 shadow-accent ${className}`}
      data-player={dataPlayer}
      aria-label={`Player card for ${name}`}
    >
      {/* Image */}
      <Image
        src={image}
        alt={name}
        width={128}
        height={128}
        className="w-32 h-32 rounded-full object-cover shadow-md"
        loading="lazy"
      />
      {/* Name */}
      <h5 className="text-lg font-semibold text-primary">{name}</h5>
      {/* Optional: Add a description or stats */}
      {/* <p className="text-sm text-gray-600">{description}</p> */}
    </div>
  );
};

export const UploadCard = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col gap-4 min-w-2xl mx-auto bg-base-100 p-6 rounded-xl shadow-2xl shadow-accent">
      <h2 className="text-lg font-semibold text-primary mb-4">Upload Image</h2>

      <div className="flex justify-center text-center text-sm text-primary mb-4">
        <div className="flex flex-col items-center gap-2 p-4">
          <FaPhotoFilm className="text-4xl text-neutral" />
          <p className="font-medium">Images</p>
          <p className="text-xs">PNG, JPG, in-app cropping supported</p>
        </div>
      </div>

      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-primary rounded-lg cursor-pointer hover:bg-base-200 text-center mb-4"
      >
        <FiUploadCloud className="text-4xl text-neutral mb-2" />
        <p className="text-primary">Drag & drop to upload</p>
        <p className="text-primary text-sm underline">or browse</p>
        <input
          id="file-upload"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      <div className="flex justify-end mt-4">
        <button disabled={!file} className={`btn btn-primary ${!file ? "btn-disabled" : ""}`}>
          Upload
        </button>
      </div>
    </div>
  );
};
