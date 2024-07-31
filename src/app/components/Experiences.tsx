import { FaRegCalendarDays, FaLocationDot } from "react-icons/fa6";

interface Experience {
  role: string;
  entity: string;
  date: string;
  location: string;
  details: string;
}

interface ExperiencesProps {
  experiences: {
    title: string;
    data: Experience[];
  };
}

const Experiences: React.FC<ExperiencesProps> = ({ experiences: { title, data } }) => (
  <>
    <h3>{title}</h3>
    {data.map((exp, index) => (
      <section key={index} className={` border-dashed border-gray-300 mb-2 pb-3 ${index === data.length - 1 ? "" : "border-b"}`}>
        <div key={index} className="flex items-center justify-between">
          <div className="text-sm font-medium">{exp.role}</div>
          <div className="text-xs font-light">{exp.entity}</div>
        </div>
        <div className="flex items-center justify-between text-[10px] my-1 text-[#71767b] leading-[12px]">
          <span className="flex items-center">
            <FaRegCalendarDays className="text-[8px] mr-[3px]" />
            {exp.date}
          </span>
          <span className="flex items-center">
            <FaLocationDot className="text-[8px] mr-[2px]" />
            {exp.location}
          </span>
        </div>
        <div className="text-[11px] leading-normal p-0">{exp.details}</div>
      </section>
    ))}
  </>
);

export default Experiences;
