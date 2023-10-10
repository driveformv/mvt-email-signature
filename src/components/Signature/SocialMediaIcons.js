import { useCompanies } from "contexts/companies";

const SocialMediaIcons = () => {
  const company = useCompanies();

  return (
    <tr>
      <td>
        {Object.keys(company.socialMedia).map((socialMediaKey) => (
          <span key={socialMediaKey}>
            <a
              href={company.socialMedia[socialMediaKey].source}
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="23"
                alt="facebook icon"
                src={company.socialMedia[socialMediaKey].icon}
              />
            </a>
            &nbsp;
          </span>
        ))}
      </td>
    </tr>
  );
};

export default SocialMediaIcons;
