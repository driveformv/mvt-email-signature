import { useCompanies } from 'contexts/companies';

const ContactDetails = ({ cellNumber, officeNumber, officeExt, email }) => {
  const { companies, selectedCompanyKey } = useCompanies();

  return (
    <>
      <tr>
        <td
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '10pt',
            lineHeight: '10pt',
            paddingBottom: '2.5pt',
          }}
        >
          <span>
            <strong style={{ color: companies[selectedCompanyKey].brandColor, fontFamily: 'Arial, sans-serif' }}>
              Office:{' '}
            </strong>
            {officeNumber}{' '}
          </span>
          {officeExt ? (
            <span>
              <span style={{ color: companies[selectedCompanyKey].brandColor }}>
                <strong>Ext: </strong>
              </span>
              {officeExt}
            </span>
          ) : null}
        </td>
      </tr>
      {cellNumber ? (
        <tr>
          <td
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '10pt',
              lineHeight: '10pt',
              paddingBottom: '2.5pt',
            }}
          >
            <span>
              <strong style={{ color: companies[selectedCompanyKey].brandColor, fontFamily: 'Arial, sans-serif' }}>
                Cell Number:{' '}
              </strong>
              {cellNumber}
            </span>
          </td>
        </tr>
      ) : null}
      <tr>
        <td
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '10pt',
            lineHeight: '10pt',
            paddingBottom: '2.5pt',
          }}
        >
          <span>
            <strong style={{ color: companies[selectedCompanyKey].brandColor, fontFamily: 'Arial, sans-serif' }}>
              Email:{' '}
            </strong>
            {email}
          </span>
        </td>
      </tr>
    </>
  );
};

export default ContactDetails;
