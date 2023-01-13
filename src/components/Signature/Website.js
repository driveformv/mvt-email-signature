import { useCompanies } from 'contexts/companies';

const Quote = () => {
  const { companies, selectedCompanyKey } = useCompanies();
  const company = companies[selectedCompanyKey];

  return (
    <tr>
      <td
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '10pt',
          lineHeight: '10pt',
          paddingBottom: '2.5pt',
        }}
      >
        <em>
          <strong style={{ fontFamily: 'Arial, sans-serif', fontSize: '10pt' }}>{company.websiteURL}</strong>
        </em>
      </td>
    </tr>
  );
};

export default Quote;
