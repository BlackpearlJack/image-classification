import { Player } from "@/config/type";
import Image from "next/image";

// Reusable PlayerCard component
export const PlayerCard: React.FC<Player> = ({ name, image, dataPlayer }) => {
  return (
    <div
      className="flex flex-col items-center gap-y-3 p-4 bg-gray-100 rounded-lg shadow-lg"
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