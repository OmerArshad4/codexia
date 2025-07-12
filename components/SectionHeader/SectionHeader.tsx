"use client";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="my-6">
      <h1
        className="
          text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] 
          leading-[32px] sm:leading-[34px] md:leading-[36px] lg:leading-[36px]
          font-semibold text-white font-oswald
        "
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-[16px] leading-[20px] font-normal text-white font-dmSans mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
