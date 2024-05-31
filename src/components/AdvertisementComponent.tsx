import { extraProducts } from "../constants";

export default function AdvertisementComponent() {
  return (
    <div className="mt-10 p-4 md:p-8 bg-[#010409] rounded-lg text-center mb-40">
      <h2 className="text-xl md:text-2xl font-bold text-gray-300 mb-8">
        Which AirPods are right for you?
      </h2>
      <div className="max-w-7xl mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white gap-6">
        {extraProducts.map((product, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-full max-w-[230px] text-center">
              <div className="flex justify-center">
                <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[240px] mb-4">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-white">
                  {product.title}
                </h1>
                <p className="text-gray-300  mt-1 mb-2">{product.subtitle}</p>
                <p className="text-gray-300  my-4">{product.price}</p>
                <div className="flex justify-center mb-2">
                  <button className="flex items-center bg-[#147ce5] px-3 py-1 text-lg rounded-lg text-white">
                    Buy
                  </button>
                </div>
                <div className="pb-2 border-b-2 border-gray-600"></div>
              </div>
              <div className="mt-4">
                {product.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center mb-3 h-[130px] text-[11px] gap-2 md:text-[13px]"
                  >
                    {feature.img && (
                      <div className="relative w-8 h-8 md:w-12 md:h-12">
                        <img
                          src={feature.img}
                          alt={feature.text}
                          className="object-cover bg-[#5e5d5d] rounded-sm"
                        />
                      </div>
                    )}
                    <p className="font-bold mt-1 text-gray-300 ">
                      {feature.text}
                    </p>
                    {feature.desc && (
                      <p className="font-bold text-center">{feature.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
