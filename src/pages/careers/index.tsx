// Import necessary dependencies
import { useState } from "react";

// Dummy data for simulating jobs
const jobs = [
  { title: "Software Engineer", location: "Kampala" },
  { title: "Web Developer", location: "Nairobi" },
  { title: "Data Scientist", location: "Dar-es-Salaam" },
  { title: "UX Designer", location: "Kigali" },
  { title: "Frontend Developer", location: "Malindi" },
  { title: "Mobile App Developer", location: "Nairobi" },
  { title: "Sales Representative", location: "Nairobi" },
  { title: "Marketing Specialist", location: "Nairobi" },
  { title: "Customer Support Representative", location: "Nairobi" },
  { title: "Project Manager", location: "Nairobi" },
  { title: "HR Consultant", location: "Nairobi" },
  { title: "Finance Analyst", location: "Dodoma" },
  { title: "Architect", location: "Nairobi" },
  { title: "Civil Engineer", location: "Nairobi" },
  { title: "Graphic Designer", location: "Nairobi" },
  { title: "Event Planner", location: "Nairobi" },
  { title: "Tourism Coordinator", location: "Nairobi" },
  { title: "Education Consultant", location: "Nairobi" },
  { title: "Healthcare Administrator", location: "Kisumu" },
  { title: "Restaurant Manager", location: "Nairobi" },
];

// Your existing code
import Stairs from "@/components/stairs";
import Head from "next/head";
import { Button, Card, Select, TextInput } from "flowbite-react";
import Link from "next/link";

export default function Careers() {
  // State for search inputs
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  // Unique city names from the jobs array
  const uniqueLocations = [...new Set(jobs.map((job) => job.location))];

  // Filtered jobs based on search inputs
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
      (jobLocation === "" || job.location === jobLocation)
  );

  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="description" content="Careers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
                className="object-cover w-full lg:absolute h-80 lg:h-full"
              />
              <svg
                className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                viewBox="0 0 20 104"
                fill="currentColor"
              >
                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
              </svg>
            </div>
            <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
              <h5 className="mb-3 text-3xl font-extrabold sm:text-4xl">
                We're looking for you!
              </h5>
              <p className="mb-5 text-gray-800">
                Explore the various open positions and join a vibrant team.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-8 p-4">
          {/* Search inputs */}
          <div className="flex items-center justify-center mb-4 space-x-2">
            <TextInput
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Search by Job Title"
              type="text"
            />
            <Select
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              title="job-select"
            >
              <option value="">All Locations</option>
              {uniqueLocations?.map((location: string, index: number) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>
          {/* List of jobs */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job, index) => (
              <Card className="py-4">
                <h5 className="text-2xl font-bold flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-800 dark:text-white mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {job.title}
                </h5>
                <p className="flex items-center text-sm">
                  <svg
                    className="w-4 h-4 text-gray-800 mr-2 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {job.location}
                </p>
                <Link
                  href="#"
                  className="flex items-center text-xs justify-end"
                >
                  View More
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Stairs>
    </>
  );
}
