import { Player } from "@/config/type";
import Image from "next/image";

// Reusable PlayerCard component
export const PlayerCard: React.FC<Player> = ({ name, image, dataPlayer }) => {
  return (
    <div
      className="card items-center p-5 shadow-2xl mt-2.5 shadow-accentColor-500"
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