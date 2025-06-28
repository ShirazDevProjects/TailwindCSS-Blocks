import headphonesData from "@/assets/jsonData/headphonesData.json";
import color from "color";

export default function ExpandableCards() {
  function colorShades(baseHex) {
    const shades = { lighter: "#1F2124", darker: "#484d53" };

    const baseColor = color(baseHex);

    shades.lighter = baseColor.lighten(0.4).hex();
    shades.darker = baseColor.darken(0.4).hex();

    return shades;
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-neutral-800">
      <div className="flex gap-3 min-w-4xl min-h-8/12 ">
        {headphonesData.map((headphoneData, index) => {
          const companyName = headphoneData.company_name;
          const modelName = headphoneData.model_name;
          const shortDetails = headphoneData.short_details;
          const price = headphoneData.price;
          const image = headphoneData.image;

          const shades = colorShades(headphoneData.bg_color);

          return (
            <div
              key={index}
              className={`rounded-lg w-70 min-h-4/12 text-center py-12 px-5 flex flex-col relative overflow-x-hidden group`}
              style={{
                background: `linear-gradient(to bottom left, ${shades.lighter}, ${shades.darker})`,
              }}
            >
              <p className="text-9xl group-hover:text-2xl text-white font-bold absolute top-6/12 left-6/12 -translate-x-6/12 -translate-y-6/12 opacity-50 z-0 group-hover:opacity-100 group-hover:top-1/12 group-hover:left-6/12 group-hover:-translate-x-6/12 group-hover:-translate-y-1/12 transition-all duration-500">
                {companyName}
              </p>
              <img
                src={image}
                alt={modelName}
                className="w-full h-auto mx-auto z-10 translate-y-10 group-hover:translate-y-4 transition-all duration-500"
              />
              <div className="flex flex-col grow relative">
                <p className="text-xl text-white font-semibold mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:delay-300 delay-0">
                  {modelName}
                </p>
                <p className="text-white mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:delay-300 delay-0">
                  {shortDetails}
                </p>
                <p className="text-xl text-white font-bold absolute top-2/12 left-1/2 -translate-x-6/12 group-hover:top-11/12 transition-all duration-500">
                  ${price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
