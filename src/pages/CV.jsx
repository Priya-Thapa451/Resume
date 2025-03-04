import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import cvData from "@/data/data.json";

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{cvData.name}</h1>
            <p className="text-lg text-gray-600">{cvData.position}</p>
          </div>
          <div className="flex gap-4">
            <a
              href={cvData.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="text-blue-600" />
            </a>
            <a href={cvData.git_url} target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-gray-800" />
            </a>
          </div>
        </div>
        <Separator className=" bg-black" />
        <CardContent>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p>Email: {cvData.email}</p>
            <p>Phone: {cvData.phone_number}</p>
            <p>Address: {cvData.address}</p>
          </div>
          <Separator className="my-3" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Work Experience</h2>
            <Separator className=" bg-black" />
            {cvData.work_experience.map((job, index) => (
              <div key={index} className="mt-2 ">
                <div>
                  <h3 className="font-semibold text-lg">{job.job_title}</h3>
                  <div className="flex  justify-between">
                    <h1 className="font-medium">{job.company_name}</h1>
                    <p className="text-sm text-gray-500 ">
                      {job.start_date} - {job.end_date}
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-sm text-justify">
                  {job.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator className="my-3" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Education</h2>
            <Separator className=" bg-black" />
            {cvData.education.map((edu, index) => (
              <div key={index} className="mt-2">
                <h3 className="font-medium">{edu.degree}</h3>
                <div className="flex  justify-between">
                  <h2>{edu.institution}</h2>
                  <p className="text-sm text-gray-500">
                    {edu.start_date} - {edu.end_date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Separator className="my-3" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Certification</h2>
            <Separator className=" bg-black" />
            {cvData.certifications.map((certificate, index) => (
              <div key={index} className="mt-2 ">
                <div className="">
                  <h3 className="font-medium">
                    {certificate.certification_name}
                  </h3>
                  <p className="text-sm text-gray-500 ">
                    {certificate.issuing_organization}
                  </p>
                  <p className="text-sm text-gray-500 ">
                    {certificate.issue_date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Separator className="my-3" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Skills</h2>
            <Separator className=" bg-black" />
            <div className="flex flex-wrap gap-2">
              {cvData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-sm px-3 py-1 rounded-full "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <Separator className="my-3" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            <Separator className=" bg-black" />
            {cvData.technical_projects.map((project, index) => (
              <div key={index} className="mt-2">
                <h3 className="font-medium">{project.project_name}</h3>
                <p className="text-sm text-gray-500 text-justify">
                  {project.description}
                </p>
                {project.project_link && (
                  <a
                    href={project.project_link}
                    target="_blank"
                    className="text-blue-600 text-sm"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
          <Separator className="my-3" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Languages</h2>
            <Separator className=" bg-black" />
            {cvData.languages.map((language, index) => (
              <div
                key={index}
                className="mt-2 flex justify-normal items-center "
              >
                {language}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
         
    </div>
  );
}
