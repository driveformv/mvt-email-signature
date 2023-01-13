import { useCompanies } from 'contexts/companies';

const Logo = () => {
  const { companies, selectedCompanyKey } = useCompanies();

  return (
    <a href={`https://${companies[selectedCompanyKey].websiteURL}`} target="_blank" rel="noreferrer">
      <img border="0" src={companies[selectedCompanyKey].logoURL} alt="Logo" width={80} />
    </a>
  );
};

export default Logo;
