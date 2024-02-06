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
import { Briefcase, ChevronRight, MapPin } from "react-feather";

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
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
          <div className="mx-auto sm:text-center lg:max-w-2xl">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                We're looking for YOU!
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud ullamco laboris aliquip ex ea.
            </p>
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
                <div className="flex space-x-2">
                  <Briefcase />
                  <h5 className="text-2xl font-bold">{job.title}</h5>
                </div>
                <div className="flex space-x-2">
                  <MapPin size={16} />
                  <p className="flex items-center text-sm">{job.location}</p>
                </div>
                <div className="flex justify-end hover:text-green-600 hover:underline">
                  <Link
                    href="#"
                    className="flex items-center text-xs justify-end"
                  >
                    View More
                  </Link>
                  <ChevronRight size={12} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Stairs>
    </>
  );
}
