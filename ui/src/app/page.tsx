// import Image from "next/image";
// import { AppButton } from "./components/common.components";
// import chrisPic from "./0c02e3c0d732563b67ce27f6fe7f95ae.jpg";
// import demiPic from "./1c309ab9cb3d4841bc2820ec5045cdae.jpg";


export default function Home() {
  const players = [
    { name: "Chris Hemsworth", image:"", dataPlayer: "Chris_Hemsworth" },
    { name: "Demi Lovato", image: "", dataPlayer: "Demi_Lovato" },
    { name: "Ina Garten", image: "", dataPlayer: "Ina_Garten" },
    { name: "Isabel Allende", image: "", dataPlayer: "Isabel_Allende"},
    { name: "Lamine Yamal", image: "", dataPlayer: "Lamine_Yamal" },
  ];

  return (
    <div className="container">
      <div className="row">
        {players.map((player, index) => (
          <div key={index} className="col card-wrapper" data-player={player.dataPlayer}>
            <div className="card border-0">
              <div className="position-relative rounded-circle overflow-hidden mx-auto custom-circle-image">
                {/* <Image src={player.image} alt={player.name} width={500} height={500}/> */}
              </div>
              <div className="card-body text-center mt-4">
                <h5 className="text-uppercase card-title">{player.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}