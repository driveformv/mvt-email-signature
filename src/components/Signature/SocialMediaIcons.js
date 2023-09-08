import { useCompanies } from 'contexts/companies';

const SocialMediaIcons = () => {
  const company = useCompanies();

  return (
    <tr>
      <td>
        {Object.hasOwn(company.socialMedia, 'facebook') && (
          <span>
            <a href={company.socialMedia.facebook.source} target="_blank" rel="noreferrer">
              <img width="23" alt="facebook icon" src={company.socialMedia.facebook.icon} />
            </a>
            &nbsp;
          </span>
        )}
        {Object.hasOwn(company.socialMedia, 'twitter') && (
          <span>
            <a href={company.socialMedia.twitter.source} target="_blank" rel="noreferrer">
              <img width="23" alt="twitter icon" src={company.socialMedia.twitter.icon} />
            </a>
            &nbsp;
          </span>
        )}
        {Object.hasOwn(company.socialMedia, 'youtube') && (
          <span>
            <a href={company.socialMedia.youtube.source} target="_blank" rel="noreferrer">
              <img width="23" alt="youtube icon" src={company.socialMedia.youtube.icon} />
            </a>
            &nbsp;
          </span>
        )}
        {Object.hasOwn(company.socialMedia, 'linkedin') && (
          <span>
            <a href={company.socialMedia.linkedin.source} target="_blank" rel="noreferrer">
              <img width="23" alt="linkedin icon" src={company.socialMedia.linkedin.icon} />
            </a>
            &nbsp;
          </span>
        )}
        {Object.hasOwn(company.socialMedia, 'instagram') && (
          <span>
            <a href={company.socialMedia.instagram.source} target="_blank" rel="noreferrer">
              <img width="23" alt="instagram icon" src={company.socialMedia.instagram.icon} />
            </a>
            &nbsp;
          </span>
        )}
      </td>
    </tr>
  );
};

export default SocialMediaIcons;
