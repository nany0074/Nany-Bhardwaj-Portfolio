import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { skills } from "../constants/index";

const SkillItemCard = ({ skill }) => {
  return (
    <div
      className={twMerge(
        "relative h-full w-48 mx-2 cursor-pointer overflow-hidden rounded-xl",
        "border p-4 border-gray-50/[.1] bg-gradient-to-r from-indigo to-storm",
        "hover:bg-royal hover-animation flex items-center justify-center"
      )}
    >
      <span className="text-white font-medium text-center">{skill}</span>
    </div>
  );
};

export default function SkillsDisplay() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">My Technical Skills</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <h4 className="text-2xl">Frontend Skills</h4>
        <Marquee pauseOnHover className="[--duration:20s] py-4">
          {skills[0].items.map((skill, index) => (
            <SkillItemCard key={`frontend-${index}`} skill={skill} />
          ))}
        </Marquee>

        <h4 className="text-2xl mt-8">Backend Skills</h4>
        <Marquee reverse pauseOnHover className="[--duration:20s] py-4">
          {skills[1].items.map((skill, index) => (
            <SkillItemCard key={`backend-${index}`} skill={skill} />
          ))}
        </Marquee>

        <h4 className="text-2xl mt-8">Tools</h4>
        <Marquee pauseOnHover className="[--duration:20s] py-4">
          {skills[2].items.map((skill, index) => (
            <SkillItemCard key={`tools-${index}`} skill={skill} />
          ))}
        </Marquee>

        <h4 className="text-2xl mt-8">Other Skills</h4>
        <Marquee reverse pauseOnHover className="[--duration:20s] py-4">
          {skills[3].items.map((skill, index) => (
            <SkillItemCard key={`others-${index}`} skill={skill} />
          ))}
        </Marquee>

        <h4 className="text-2xl mt-8">Soft Skills</h4>
        <Marquee pauseOnHover className="[--duration:20s] py-4">
          {skills[4].items.map((skill, index) => (
            <SkillItemCard key={`soft-${index}`} skill={skill} />
          ))}
        </Marquee>

        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}