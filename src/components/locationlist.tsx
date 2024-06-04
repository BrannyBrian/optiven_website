import Link from "next/link";

const LocationList = ({ locations }: any) => {
  return (
    <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <div className="pt-4 px-6 font-extrabold uppercase tracking-wide text-lg border-b bg-gradient-to-r from-green-400 to-green-600 text-white rounded-t-lg">
        View More Properties
      </div>
      {locations.map((location: any, index: number) => (
        <Link
          key={index}
          href={`/projects/project-locations/${encodeURIComponent(location)}`}
          passHref
        >
          <div
            className={`block font-bold w-full px-6 py-3 cursor-pointer transition-all duration-300 transform ${
              index === 0 ? "rounded-t-lg" : ""
            } border-b border-gray-200 hover:bg-gray-100 hover:text-green-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-700 focus:text-green-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white ${
              index === locations.length - 1 ? "rounded-b-lg" : ""
            }`}
          >
            Plots in {location}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LocationList;
