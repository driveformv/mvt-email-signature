import { useCompanies } from 'contexts/companies';

const Logo = () => {
  const company = useCompanies();

  return (
    <a href={`https://${company.websiteURL}`} target="_blank" rel="noreferrer">
      <img border="0" src={company.logoURL} alt="Logo" width={80} />
    </a>
  );
};

export default Logo;
