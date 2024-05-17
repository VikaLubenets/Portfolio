'use client'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "@/components/CTA/CTA";
import { experiences, skills } from "@/constants/constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
return (
  <section className='max-container'>
    <h1 className='head-text'>
      Hello, I'm{" "}
      <span className='blue-gradient_text font-semibold drop-shadow'>
        {" "}
        Viktoria
      </span>{" "}
      👋
    </h1>

    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>
        Software Engineer based in Serbia, specializing in Frontend development.
      </p>
    </div>

    <div className='py-10 flex flex-col'>
      <h3 className='subhead-text'>My Skills</h3>

      <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill) => (
          <div className='block-container w-20 h-20' key={skill.name}>
            <div className='btn-back rounded-xl' />
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className=''>
      <h3 className='subhead-text'>Work Experience.</h3>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I've worked with different companies, leveling up my skills. Here's the rundown:
        </p>
      </div>

      <div className='mt-12 flex'>
          {experiences.map((experience, index) => (
            <>
            <div>
                <h3 className='text-black text-xl font-poppins font-semibold'>
                  {experience.title}
                </h3>
                <p
                  className='text-black-500 font-medium text-base'
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className='text-black-500/50 font-normal pl-1 text-sm'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </>
          ))}
      </div>
    </div>

    <hr className='border-slate-200' />

    <CTA />
  </section>
);
};

export default About;