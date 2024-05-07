import Link from "next/link";

interface LocationListProps {
  locations: string[];
}

const LocationList = ({ locations }: LocationListProps) => {
  return (
    <div className="w-96 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {locations.map((location, index) => (
        <Link
          key={index}
          href={`/projects/project-locations/${encodeURIComponent(location)}`}
          passHref
        >
          <div
            className={`block w-full px-4 py-2 cursor-pointer ${
              index === 0 ? "rounded-t-lg" : ""
            } border-b border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:text-green-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white ${
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
