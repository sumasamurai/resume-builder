import { FaRegCalendarDays, FaLocationDot } from "react-icons/fa6";

interface EducationProps {
  education: {
    title: string;
    entity: string;
    date: string;
    location: string;
    degree: string;
    faculty: string;
  };
}

const Education: React.FC<EducationProps> = ({ education: { title, date, location, entity, faculty } }) => (
  <>
    <h3 className="text-sm font-medium">{title}</h3>
    <section className="mb-2">
      <div className="text-sm font-light mt-2 mb-1">{entity}</div>
      <div className=" m-0 text-gray-500 flex items-center justify-between text-[10px] my-1 text-[#71767b] leading-[12px]">
        <span className="flex items-center">
          <FaRegCalendarDays className="text-[8px] mr-[3px]" />
          {date}
        </span>
        <span className="flex items-center">
          <FaLocationDot className="text-[8px] mr-[2px]" />
          {location}
        </span>
      </div>
      <div className="text-[11px] font-light">{faculty}</div>
    </section>
  </>
);

export default Education;
