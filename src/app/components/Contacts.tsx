import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { LuLink } from "react-icons/lu";
import { HiPhone } from "react-icons/hi2";

interface Contacts {
  type: string;
  value: string;
  url?: string;
}

interface ContactsProps {
  contacts: Contacts[];
}

const Contacts: React.FC<ContactsProps> = ({ contacts }) => (
  <div className="text-xs text-center leading-[12px] font-light flex justify-center">
    {contacts.map((contact, index) => {
      let href: string;

      switch (contact.type) {
        case "phone":
          href = `tel:${contact.value}`;
          break;
        case "email":
          href = `mailto:${contact.value}`;
          break;
        case "telegram":
          href = contact.url || "";
          break;
        case "linkedin":
          href = contact.url || "";
          break;
        default:
          href = "#";
      }

      return (
        <a
          key={index}
          href={href}
          className="text-xs text-center leading-[12px] font-light p-2 mx-2 flex items-center opacity-60"
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.type === "phone" && <HiPhone className="text-[10px] mr-1" />}
          {contact.type === "email" && <TbMailFilled className="mr-1 mt-[2px]" />}
          {contact.type === "telegram" && <FaTelegramPlane className="mr-1" />}
          {contact.type === "linkedin" && <FaLinkedin className="mr-1" />}
          {contact.value}
          {(contact.type === "telegram" || contact.type === "linkedin") && <LuLink className="rotate-45 ml-[3px]" />}
        </a>
      );
    })}
  </div>
);

export default Contacts;
