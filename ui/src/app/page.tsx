import { PlayerCard, UploadCard } from "@/components/card.components";
import { Player } from "@/config/type";
import React from "react";

export default function Home() {
  const players: Player[] = [
    { name: "Chris Hemsworth", image: "/images/photo_2.jpg", dataPlayer: "Chris_Hemsworth" },
    { name: "Demi Lovato", image: "/images/photo_3.jpg", dataPlayer: "Demi_Lovato" },
    { name: "Ina Garten", image: "/images/photo_5.jpg", dataPlayer: "Ina_Garten" },
    { name: "Isabel Allende", image: "/images/photo_1.jpg", dataPlayer: "Isabel_Allende" },
    { name: "Lamine Yamal", image: "/images/photo_4.jpg", dataPlayer: "Lamine_Yamal" },
  ];

  return (
    <div className="flex flex-col m-auto items-center p-5 min-h-screen gap-5">
      {/* Image Cards Grid */}
      <div className="w-full md:w-4/5 flex flex-col md:flex-row gap-5 justify-center">
        {players.map((player) => (
          <PlayerCard
            key={player.dataPlayer}
            name={player.name}
            image={player.image}
            dataPlayer={player.dataPlayer}
            className="md:w-1/2 lg:w-1/3 xl:w-1/4"
          />
        ))}
      </div>

      {/* Upload Card */}
      <UploadCard />
    </div>
  );
}
