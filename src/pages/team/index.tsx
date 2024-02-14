import Stairs from "@/components/stairs";
import Head from "next/head";
import Image from "next/image";

export default function Team() {
  return (
    <>
      <Head>
        <title>Team</title>
        <meta name="description" content="Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        <div className="p-8 grid gap-10 grid-cols-1 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-base-100 shadow-xl flex flex-col md:flex-row"
            >
              <div className="md:w-1/2">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="object-cover w-full"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="font-semibold text-lg uppercase">
                  {member.name}
                </h2>
                <p className="text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Stairs>
    </>
  );
}

// Define your team members data
const teamMembers = [
  {
    name: "George Wachiuri",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "George is the CEO of Optiven Limited. He is currently a PhD candidate at the Jomo Kenyatta University of Agriculture and Technology. He holds a Masters’s degree in Business Administration (University of Nairobi), and a Bachelor of Commerce (Marketing option) Degree from University of Nairobi. He is a Certified Public Accountant – CPA (K) and is a former Lecturer at Daystar University. His entrepreneurial spirit developed early, and was awarded the Entreprenuer of the year 1997 by the University of Nairobi. He has over 21 years working experience.",
  },
  {
    name: "George Wachiuri",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "George is the CEO of Optiven Limited. He is currently a PhD candidate at the Jomo Kenyatta University of Agriculture and Technology. He holds a Masters’s degree in Business Administration (University of Nairobi), and a Bachelor of Commerce (Marketing option) Degree from University of Nairobi. He is a Certified Public Accountant – CPA (K) and is a former Lecturer at Daystar University. His entrepreneurial spirit developed early, and was awarded the Entreprenuer of the year 1997 by the University of Nairobi. He has over 21 years working experience.",
  },
  {
    name: "George Wachiuri",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "George is the CEO of Optiven Limited. He is currently a PhD candidate at the Jomo Kenyatta University of Agriculture and Technology. He holds a Masters’s degree in Business Administration (University of Nairobi), and a Bachelor of Commerce (Marketing option) Degree from University of Nairobi. He is a Certified Public Accountant – CPA (K) and is a former Lecturer at Daystar University. His entrepreneurial spirit developed early, and was awarded the Entreprenuer of the year 1997 by the University of Nairobi. He has over 21 years working experience.",
  },
  {
    name: "George Wachiuri",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "George is the CEO of Optiven Limited. He is currently a PhD candidate at the Jomo Kenyatta University of Agriculture and Technology. He holds a Masters’s degree in Business Administration (University of Nairobi), and a Bachelor of Commerce (Marketing option) Degree from University of Nairobi. He is a Certified Public Accountant – CPA (K) and is a former Lecturer at Daystar University. His entrepreneurial spirit developed early, and was awarded the Entreprenuer of the year 1997 by the University of Nairobi. He has over 21 years working experience.",
  },
  // Add more team members as needed
];
