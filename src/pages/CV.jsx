import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import cvData from "@/data/data.json";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function CV() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="p-6 ">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-2">
            <h1 className="text-3xl font-bold">{cvData.name}</h1>
            <h1 className="text-2xl font-bold">{cvData.position}</h1>
          </div>

          <div className=" flex justify-center items-center gap-1 mb-4">
            <div className="flex items-center text-sm text-[#2F4F4F] gap-2">
              <FaEnvelope size={10} />
              <span>{cvData.email}</span>
            </div>

            <div className="flex items-center text-sm text-[#2F4F4F] gap-1">
              <FaPhoneAlt size={10} />
              <span>{cvData.phone_number}</span>
            </div>

            <div className="flex items-center text-sm text-[#2F4F4F] gap-1">
              <FaMapMarkerAlt size={10} />
              <span>{cvData.address}</span>
            </div>

            <div className="flex items-center text-sm text-[#2F4F4F] gap-1">
              <FaLinkedin size={10} />
              <a
                href={cvData.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cvData.linkedin_url}
              </a>
            </div>

            <div className="flex items-center text-sm text-[#2F4F4F] gap-1">
              <FaGithub size={10} className="text-gray-800" />
              <a
                href={cvData.git_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cvData.git_url}
              </a>
            </div>
          </div>
        </div>

        <CardContent>
          <Separator className=" bg-gray-300 " />

          <div className="mt-4">
            <h2 className="text-xl font-semibold uppercase">Work Experience</h2>
            <Separator className=" bg-black" />
            {cvData.work_experience.map((job, index) => (
              <div key={index} className="mt-2 ">
                <div>
                  <h3 className="font-semibold text-lg text-[#2F4F4F]">
                    {job.job_title}
                  </h3>
                  <div className="flex  justify-between">
                    <h1 className="font-medium text-[#6C757D]">
                      {job.company_name}
                    </h1>
                    <p className="text-sm text-gray-500 ">
                      {job.start_date} - {job.end_date}
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-sm text-justify text-[#495057]">
                  {job.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator className=" bg-gray-300 opacity-50 mt-4" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold uppercase">Education</h2>
            <Separator className=" bg-black" />
            {cvData.education.map((edu, index) => (
              <div key={index} className="mt-2">
                <h3 className="font-medium text-[#2F4F4F]">{edu.degree}</h3>
                <div className="flex  justify-between">
                  <h2 className="text-[#6C757D]">{edu.institution}</h2>
                  <p className="text-sm text-gray-500">
                    {edu.start_date} - {edu.end_date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Separator className=" bg-gray-300 opacity-50 mt-4" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold uppercase">Certification</h2>
            <Separator className=" bg-black" />
            {cvData.certifications.map((certificate, index) => (
              <div key={index} className="mt-2 ">
                <div className="">
                  <h3 className="font-medium text-[#2F4F4F]">
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
          <Separator className=" bg-gray-300 opacity-50 mt-4" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold uppercase">
              Programming Languages
            </h2>
            <Separator className=" bg-black" />
            <div className="flex flex-wrap gap-2 text-[#2F4F4F]">
              {cvData.programming_languages.map(
                (programming_languages, index) => (
                  <div
                    key={index}
                    className="mt-2 flex justify-center items-center "
                  >
                    {programming_languages}
                  </div>
                )
              )}
            </div>
          </div>
          <Separator className=" bg-gray-300 opacity-50 mt-4" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold uppercase">Projects</h2>
            <Separator className=" bg-black" />
            {cvData.technical_projects.map((project, index) => (
              <div key={index} className="mt-2">
                <h3 className="font-medium text-[#2F4F4F]">
                  {project.project_name}
                </h3>
                <p className="text-sm text-gray-500 text-justify">
                  {project.description}
                </p>
                <p className="flex text-sm text-gray-500 text-justify gap-1 ">
                  Programming Languages:{" "}
                  {project.programming_language.map((language, langIndex) => (
                    <span key={langIndex}>{language}</span>
                  ))}
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
          <Separator className=" bg-gray-300 opacity-50 mt-4" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold uppercase">Languages</h2>
            <Separator className=" bg-black" />
            {cvData.languages.map((language, index) => (
              <div
                key={index}
                className="mt-2 flex justify-normal items-center text-[#2F4F4F] "
              >
                {language}
              </div>
            ))}
          </div>
          <Separator className=" bg-gray-300 opacity-50 mt-4" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold uppercase">Skills</h2>
            <Separator className=" bg-black" />
            <div className="mt-2">
              {cvData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="flex justify-normal items-center text-[#2F4F4F]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
