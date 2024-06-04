import React from "react";

type PlotPriceCardProps = {
  plotSize: string;
  cashPrice: string;
  threeMonthsPrice: string;
  sixMonthsPrice: string;
  // twelveMonthsPrice: string;
  deposit: string;
};

const PlotPriceCard: React.FC<PlotPriceCardProps> = ({
  plotSize,
  cashPrice,
  threeMonthsPrice,
  sixMonthsPrice,
  // twelveMonthsPrice,
  deposit,
}) => {
  return (
    <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl">
      <div className="text-center mb-4">
        <div className="inline-block px-4 py-2 mb-2 text-lg font-extrabold text-white bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-md">
          {plotSize}
        </div>
      </div>
      <div className="flex flex-col text-center space-y-4">
        <div>
          <label className="text-lg font-semibold text-gray-700">
            Cash Price
          </label>
          <div className="flex items-center justify-center mt-2">
            <div className="text-5xl font-bold text-green-600">{cashPrice}</div>
          </div>
        </div>
        <div>
          <label className="text-lg font-semibold text-gray-700">
            3 Months Price
          </label>
          <div className="flex items-center justify-center mt-2">
            <div className="text-5xl font-bold text-green-600">
              {threeMonthsPrice}
            </div>
          </div>
        </div>
        <div>
          <label className="text-lg font-semibold text-gray-700">
            6 Months Price
          </label>
          <div className="flex items-center justify-center mt-2">
            <div className="text-5xl font-bold text-green-600">
              {sixMonthsPrice}
            </div>
          </div>
        </div>
        {/* <div>
          <label className="text-lg font-semibold text-green-600">
            12 Months Price
          </label>
          <div className="flex items-center justify-center mt-2">
            <div className="text-5xl font-bold">{twelveMonthsPrice}</div>
          </div>
        </div> */}
        <div>
          <label className="text-lg font-semibold text-gray-700">Deposit</label>
          <div className="flex items-center justify-center mt-2">
            <div className="text-5xl font-bold text-green-600">{deposit}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotPriceCard;
