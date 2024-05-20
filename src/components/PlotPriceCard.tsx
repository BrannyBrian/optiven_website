import React from "react";

type PlotPriceCardProps = {
  plotSize: string;
  cashPrice: string;
  threeMonthsPrice: string;
  sixMonthsPrice: string;
  twelveMonthsPrice: string;
  deposit: string;
};

const index: React.FC<PlotPriceCardProps> = ({
  plotSize,
  cashPrice,
  threeMonthsPrice,
  sixMonthsPrice,
  // twelveMonthsPrice,
  deposit,
}) => {
  return (
    <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="font-bold border border-black pt-1 px-3">
            {plotSize}
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center pt-4">
        <div>
          <label className="text-lg font-semibold text-green-600">
            Cash Price
          </label>
          <div className="flex items-center justify-center mt-2">
            <div className="text-5xl font-bold">{cashPrice}</div>
          </div>
        </div>
        <div>
          <label className="text-lg font-semibold text-green-600">
            3 Months Price
          </label>
          <div className="flex items-center justify-center mt-2">
            <div className="text-5xl font-bold">{threeMonthsPrice}</div>
          </div>
        </div>
        <div>
          <label className="text-lg font-semibold text-green-600">
            6 Months Price
          </label>
          <div className="flex items-center justify-center mt-2">
            <div className="text-5xl font-bold">{sixMonthsPrice}</div>
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
        <label className="text-lg font-semibold text-green-600">Deposit</label>
        <div className="flex items-center justify-center mt-2">
          <div className="text-5xl font-bold">{deposit}</div>
        </div>
      </div>
    </div>
  );
};

export default index;
