import React from "react";

type EigthAcreCardProps = {
  displayPrices: {
    eighthAcreCashPrice: string;
    eigthAcre3MonthsPrice: string;
    eigthAcre6MonthsPrice: string;
    eigthAcre12MonthsPrice: string;
  };
  handleUSDConversion: () => void;
  handleEURConversion: () => void;
  handleGBPConversion: () => void;
  resetToKESPrices: () => void;
};

const labelMappings = {
  eighthAcreCashPrice: "Cash Price",
  eigthAcre3MonthsPrice: "3 Months Price",
  eigthAcre6MonthsPrice: "6 Months Price",
  eigthAcre12MonthsPrice: "12 Months Price",
};

const EigthAcreCard: React.FC<EigthAcreCardProps> = ({
  displayPrices,
  handleUSDConversion,
  handleEURConversion,
  handleGBPConversion,
  resetToKESPrices,
}) => {
  return (
    <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="font-bold border border-black pt-1 px-3">
            1/8 Acre
          </div>
        </div>
        {Object.entries(displayPrices).map(([key, price], index) => (
          <div key={index}>
            <div className="text-lg font-semibold text-green-600">
              {labelMappings[key as keyof typeof labelMappings]}
            </div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">{price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-2">
        <button
          onClick={resetToKESPrices}
          className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          type="button"
        >
          Price in KES
        </button>
        <button
          onClick={handleUSDConversion}
          className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          type="button"
        >
          Price in USD
        </button>
        <button
          onClick={handleEURConversion}
          className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          type="button"
        >
          Price in EUR
        </button>
        <button
          onClick={handleGBPConversion}
          className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          type="button"
        >
          Price in GBP
        </button>
      </div>
    </div>
  );
};

export default EigthAcreCard;
