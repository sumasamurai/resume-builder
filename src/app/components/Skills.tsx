interface SkillsProps {
  skills: { title: string; data: string[] };
}

const Skills: React.FC<SkillsProps> = ({ skills: { title, data } }) => (
  <>
    <h3>{title}</h3>
    <section className="flex flex-wrap">
      {data.map((skill, index) => (
        <div
          key={index}
          className="flex items-center justify-center text-[11px] rounded-full border border-gray-300 pt-[1px] pr-[4px] pb-[2px] pl-[4px] mx-[1px] my-[1px] text-black font-normal leading-[14px]"
        >
          {skill}
        </div>
      ))}
    </section>
  </>
);

export default Skills;
