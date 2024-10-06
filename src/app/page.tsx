/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/role-supports-aria-props */

import BoxEditor from "@/components/BoxEditor";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex space-x-[2rem]">
      <div className="w-[20%] sticky top-0 left-0 flex flex-col space-y-[1rem] h-fit shadow-lg items-center ">
        <Link href={"#section1"}>Thông Tin</Link>
        <Link href={"#section2"}>Overview</Link>
        <Link href={"#section3"}>Work experience</Link>
      </div>
      <div className="w-[70%]">
        <section className="h-[500px]"></section>
        <div className="h-[500px]">
          <BoxEditor id="section1" content="Trinh Van Duc" />
        </div>
        <div className="h-fit mb-[100px]">
          <BoxEditor
            spellCheck={true}
            id="section2"
            content="- Over 2 years of experience in programming with good communication
              and quick learning skills - Strengths: Front-end technology and
              Back-end web application development - Proficiency in HTML, CSS,
              JavaScript - Strong proficiency in JavaScript, including DOM
              manipulation and the JavaScript object model - Thorough under
              standing of React.js and it score principles - Experience with
              popular React.js workflows (such as Flux or Redux) - Familiarity
              with newer specifications of EcmaScript - Experience with data
              structure libraries - Familiarity with RESTful APIs - Strong
              Experience in: PHP, JavaScript (ReactJS, React-native), MySQL,
              NoSQL, GraphQL, Redis, JSON, API, Docker, Kubernetes, Rancher, AWS
              services - Proficient use of source code management tools: SVN, GIT
              - Proficiency in operating systems: Linux (Ubuntu, OSX), Windows -
              Ability to learn and apply new technology quickly - Current working
              location: Ha Noi, Viet Nam"
          />
        </div>
        <div className="h-screen">
          <BoxEditor
            spellCheck={true}
            id="section3"
            content="Work experience"
          />
        </div>
      </div>
    </main>
  );
}
