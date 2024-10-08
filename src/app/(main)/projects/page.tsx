'use client'

import CTA from "@/components/CTA/CTA";
import { projects } from "@/constants/constants";
import Link from "next/link";
import Image from 'next/image'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I&apos;ve embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
              <Image
                src={project.iconUrl}
                alt='threads'
                className='w-1/2 h-1/2 object-contain'
                width={50} 
                height={50} 
              />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='flex gap-2 flex-wrap my-5'>
                {project.technologies.map(tech => (
                  <div
                    key={tech}
                    className="bg-blue-500 text-white rounded-xl px-4 py-2 transition-transform transform hover:scale-105 text-xs"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-10">
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                  >
                    Link to repository
                  </Link>
                  <Image
                    src={'/assets/icons/arrow.svg'}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                    width={16} 
                    height={16}
                  />
                </div>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    href={project.deployLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                  >
                    Link to deploy
                  </Link>
                  <Image
                    src={'/assets/icons/arrow.svg'}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;