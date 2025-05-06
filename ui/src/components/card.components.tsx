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
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-base-100 rounded-xl shadow-2xl shadow-accent flex flex-col gap-5">
      <h2 className="text-xl font-semibold text-primary text-center">Upload Image</h2>

      <div className="flex flex-col items-center justify-center">
        <FaPhotoFilm className="text-4xl mx-auto text-neutral mb-1" />
        <p className="font-medium text-primary">Images</p>
        <p className="text-xs text-primary">PNG, JPG</p>
      </div>

      <label
        htmlFor="file-upload"
        className="border-2 border-dashed border-primary hover:bg-base-200 transition cursor-pointer flex flex-col items-center justify-center text-center h-48 rounded-lg"
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

      <div className="text-right">
        <button className="btn btn-primary" disabled={!file}>
          Upload
        </button>
      </div>
    </div>
  );
};
