import { useState } from "react";
import charactersData from "@/assets/jsonData/characterData.json";

export default function AnimatedCharacterCards() {
  const [characterData, setCharacterData] = useState(charactersData[0]);

  return (
    <div className="relative bg-neutral-100 px-28 py-20 w-full h-screen">
      <div
        className="absolute top-0 start-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${characterData.background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* character details area */}
      <div
        className="grid grid-cols-12 w-full min-h-4/12 z-10 mb-10 bg-neutral-800/60 rounded-lg p-5"
        style={{ position: "inherit" }}
      >
        <div className="col-span-12 text-white w-full">
          <p className="text-2xl font-bold text-center">
            {characterData.name}{" "}
            <span className="text-xl font-semibold">
              {characterData.hero_name}
            </span>
          </p>
          <p className="text-md">{characterData.story_snippet}</p>
        </div>
      </div>

      {/* character cards area */}
      <div
        className="grid grid-cols-12 gap-3 w-full min-h-[250px] z-10"
        style={{ position: "inherit" }}
      >
        {charactersData.map((characterData, index) => (
          <div
            key={index}
            onClick={() => setCharacterData(characterData)}
            onMouseEnter={(e) => {
              const characterVideo = e.currentTarget.querySelector("video");
              characterVideo?.play();
              setCharacterData(characterData);
            }}
            onMouseLeave={(e) => {
              const characterVideo = e.currentTarget.querySelector("video");
              if (characterVideo) {
                characterVideo?.pause();
                characterVideo.currentTime = 0;
              }
            }}
            className="col-span-3 flex justify-center items-center bg-white shadow-lg text-center rounded-lg w-full max-h-[250px] overflow-hidden relative group"
          >
            <video className="absolute top-0 start-0 w-full h-auto z-10">
              <source src={characterData.video} type="video/mp4" />
            </video>
            <div
              style={{
                backgroundImage: `url(${characterData.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundSize: "cover",
              }}
              className="w-full h-full z-20 transition-opacity duration-500 group-hover:opacity-0"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
