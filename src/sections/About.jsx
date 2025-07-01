import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import ResumeDownloadButton from "../components/ResumeDownloadButton";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Nany Bhardwaj</p>
            <p className="subtext">
              Over the last 3 years, I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Tailwind CSS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Node.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Javascript"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="React.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="CI/CD Pipelines"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Delhi, and open to work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
            <ResumeDownloadButton/>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
             
            <div className="space-y-0">
              {/* Frontend Skills */}
              <div>
                <h2 className="text-sm font-semibold text-gray-500 mb-1">Frontend :</h2>
                <p className="text-gray-400">
                  React, Redux, JavaScript (ES6+), Tailwind CSS, Material UI, HTML5, CSS3, AJAX, Media Queries, Sass,  Node.js, REST APIs, Next.js, JWT, MongoDB
                </p>
              </div>
           
              {/* Tools */}
              <div>
                <h2 className="text-sm font-semibold text-gray-500 mb-1">Tools :</h2>
                <p className="text-gray-400">
                  Git, GitHub Copilot, ChatGPT API, Postman, GitLab, Vercel, Netlify, Figma, Confluence
                </p>
              </div>
              {/* Other Skills */}
              {/* <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Other Skills</h2>
                <p className="text-gray-600">
                  Micro Frontends, SEO, UI/UX, JSON, Agile Scrum, Security Best Practices
                </p>
              </div> */}
              {/* Soft Skills */}
              {/* <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Soft Skills</h2>
                <p className="text-gray-600">
                  Leadership, Communication, Collaboration, Problem-Solving, Time Management
                </p>
              </div> */}
          </div>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
