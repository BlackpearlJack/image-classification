import { Player } from "@/config/type";
import Image from "next/image";
import { FaPhotoFilm } from "react-icons/fa6";

// Reusable PlayerCard component
export const PlayerCard: React.FC<Player> = ({ name, image, dataPlayer, className }) => {
  return (
    <div
      className={`card bg-primaryColor-100 items-center p-5 shadow-2xl mt-2.5 shadow-accentColor-500 ${className}`}
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
      <h5 className="text-lg font-semibold text-gray-800">{name}</h5>
      {/* Optional: Add a description or stats */}
      {/* <p className="text-sm text-gray-600">{description}</p> */}
    </div>
  );
};

export const UploadCard = () => {
  return (
    <div className="flex flex-col bg-primaryColor-100 shadow-2xl rounded-md shadow-accentColor-500 min-w-2xl justify-center items-center">
      <div className="flex p-2 gap-1">
        <FaPhotoFilm className="rounded-full items-center text-primaryColor-900" />
        <p className="text-primaryColor-900">Upload Image</p>
      </div>
      <input type="text" className="file-input file-input-ghost" />
    </div>
  );
};
