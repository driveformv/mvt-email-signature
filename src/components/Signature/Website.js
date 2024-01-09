import { useCompanies } from "contexts/companies";

const Quote = () => {
  const company = useCompanies();

  return (
    <tr>
      <td
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "10pt",
          lineHeight: "10pt",
          paddingBottom: "2.5pt",
        }}
      >
        <em>
          <a href={company.websiteURL} target="_blank" rel="noreferrer">
            <strong style={{ fontFamily: "Arial, sans-serif", fontSize: "10pt" }}>{company.websiteURL}</strong>
          </a>
        </em>
      </td>
    </tr>
  );
};

export default Quote;
