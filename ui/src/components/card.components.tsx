"use client";
import { Player } from "@/config/type";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPhotoFilm } from "react-icons/fa6";
import { FiUploadCloud } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";

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

// UploadCard component for uploading images
export const UploadCard = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type.startsWith("image/")) {
      setFile(selected);
    } else {
      setFile(null);
      setPreview(null);
    }
  };

  const handleClear = () => {
    setFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (!file) return setPreview(null);
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-base-100 rounded-2xl shadow-2xl shadow-accent flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-primary text-center">Upload Image</h2>

      <div className="flex flex-col items-center justify-center mb-4">
        <FaPhotoFilm className="text-4xl mx-auto text-neutral mb-2" />
        <p className="font-medium text-primary">Supported: PNG, JPG</p>
        <p className="text-xs text-primary">Max size: 5MB</p>
      </div>

      {preview ? (
        <div className="relative w-full max-h-64 rounded-lg overflow-hidden border border-base-300">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-contain bg-base-200"
          />
          {/* <button
            onClick={handleClear}
            className="absolute top-2 right-2 text-error bg-base-100 rounded-full hover:text-red-600 transition"
            aria-label="Clear image"
          >
            <IoCloseCircle className="text-2xl" />
          </button> */}
        </div>
      ) : (
        <label
          htmlFor="file-upload"
          className="h-48 border-2 border-dashed border-primary hover:bg-base-200 transition cursor-pointer flex flex-col items-center justify-center rounded-lg text-center"
        >
          <FiUploadCloud className="text-4xl text-neutral mb-2" />
          <p className="text-primary font-medium">Drag & drop to upload</p>
          <p className="text-primary text-sm underline">or click to browse</p>
          <input
            id="file-upload"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      )}

      <div className="flex justify-end gap-2">
        <button
          className="btn btn-secondary btn-sm"
          onClick={handleClear}
          disabled={!file}
        >
          Clear
        </button>
        <button className="btn btn-base-200 btn-sm" disabled={!file}>
          Classify
        </button>
      </div>
    </div>
  );
};


