import Image from "next/image";

import { cn, getTechnologyLogos } from "@/lib/utils";

const TechnologyBadges = async ({ technicalStack }: TechnologyIconProps) => {
  const technologyIcons = await getTechnologyLogos(technicalStack);

  return (
    <div className="flex flex-row">
      {technologyIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={cn(
            "relative group bg-dark-300 rounded-full p-2 flex flex-center",
            index >= 1 && "-ml-3"
          )}
        >
          <span className="tech-tooltip">{tech}</span>

          <Image
            src={url}
            alt={tech}
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      ))}
    </div>
  );
};

export default TechnologyBadges;
