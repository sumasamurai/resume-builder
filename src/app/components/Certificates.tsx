import { FaRegCalendarDays, FaLocationDot } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";

interface Certificate {
  title: string;
  date: string;
  entity: string;
  url: string;
}

interface CertificatesProps {
  certificates: Certificate[];
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => (
  <section>
    <h3 className="text-sm font-medium">Certificates</h3>
    <ul>
      {certificates.map((cert, index) => (
        <section key={index} className={` border-dashed border-gray-300 mb-2 pb-2 ${index === certificates.length - 1 ? "" : "border-b"}`}>
          <div className="text-sm font-medium">{cert.title}</div>
          <div className="flex items-center justify-between text-[10px] my-1 text-[#71767b] leading-[12px]">
            <span className="flex items-center">
              <FaRegCalendarDays className="text-[8px] mr-[3px]" />
              {cert.date}
            </span>
            <span className="flex items-center">
              <FaLocationDot className="text-[8px] mr-[2px]" />
              {cert.entity}
            </span>
          </div>
          <a key={index} href={`https://${cert.url}`} className="leading-[12px] font-light py-1 flex items-center" target="_blank" rel="noopener noreferrer">
            <span className="text-[8px]">{cert.url}</span>
            <LuLink className="text-xs rotate-45 ml-[3px] opacity-70" />
          </a>
        </section>
      ))}
    </ul>
  </section>
);

export default Certificates;
