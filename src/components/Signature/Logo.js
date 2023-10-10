import { useCompanies } from "contexts/companies";

const Logo = () => {
  const company = useCompanies();

  const logoImgDimension = {
    STAGECOACH: {
      width: 120,
    },
  }[company.id] ?? { width: 80 };

  return (
    <a href={`https://${company.websiteURL}`} target="_blank" rel="noreferrer">
      <img
        border="0"
        src={company.logoURL}
        alt="Logo"
        width={logoImgDimension.width}
      />
    </a>
  );
};

export default Logo;
