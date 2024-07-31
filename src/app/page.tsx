import Contacts from "./components/Contacts";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import { data } from "./data/text.json";

const { name, jobTitle, contacts, experiences, skillsAndTechnologies, principlesAndPractices, education, certificates } = data;

const Home: React.FC = () => (
  <main className="font-verdana leading-relaxed p-8 pr-8 pt-2 pb-2">
    <header className="my-2">
      <h1 className="text-center pt-4">{name}</h1>
      <h2 className="text-center my-2 mx-2">{jobTitle}</h2>
      <Contacts contacts={contacts} />
    </header>

    <div className="grid grid-cols-[68%_32%]">
      <div className="pr-8">
        <Experiences experiences={experiences} />
      </div>
      <div>
        <Skills skills={skillsAndTechnologies} />
        <Skills skills={principlesAndPractices} />
        <Education education={education} />
        <Certificates certificates={certificates} />
      </div>
    </div>
  </main>
);

export default Home;
