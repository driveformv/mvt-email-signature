import ContactDetails from './ContactDetails';
import Logo from './Logo';
import Name from './Name';
import PositionAndDepartment from './PositionAndDepartment';
import Website from './Website';
import SocialMediaIcons from './SocialMediaIcons';
import { useCompanies } from 'contexts/companies';
import { MutableRefObject } from 'react';

interface SignatureProps {
  signatureRef?: MutableRefObject<HTMLDivElement | null>;
  signatureDetails?: {
    fullName: string;
    jobTitle: string;
    department: string;
    cellNumber: string;
    officeNumber: string;
    officeExt: string;
    email: string;
  };
}

const INITIAL_SIGNATURE_INFORMATION = {
  fullName: 'Your Full Name',
  jobTitle: 'Your Title',
  department: 'Your Department',
  cellNumber: '123.456.7890',
  officeNumber: '123.456.7890',
  officeExt: '1234',
  email: 'youremail@m-v-t.com',
};

const Signature = ({ signatureRef, signatureDetails = INITIAL_SIGNATURE_INFORMATION }: SignatureProps) => {
  const { fullName, jobTitle, department, cellNumber, officeNumber, officeExt, email } = signatureDetails;

  const company = useCompanies();

  return (
    <div ref={signatureRef} className="signatureContainer">
      <table cellPadding="0" cellSpacing="0" style={{ backgroundColor: 'white', width: '500px' }}>
        <tbody>
          <tr>
            <td
              width="80"
              rowSpan={6}
              style={{
                borderRight: `3px solid ${company?.brandColor}`,
                padding: '0 20px',
                width: '80',
              }}
            >
              <Logo />
            </td>
            <td style={{ paddingLeft: '20px' }}>
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  <Name fullName={fullName || INITIAL_SIGNATURE_INFORMATION.fullName} />
                  <PositionAndDepartment
                    jobTitle={jobTitle || INITIAL_SIGNATURE_INFORMATION.jobTitle}
                    department={department || INITIAL_SIGNATURE_INFORMATION.department}
                  />
                  <ContactDetails
                    officeNumber={officeNumber || INITIAL_SIGNATURE_INFORMATION.officeNumber}
                    cellNumber={cellNumber}
                    officeExt={officeExt}
                    email={email || INITIAL_SIGNATURE_INFORMATION.email}
                  />
                  <Website />
                  <SocialMediaIcons />
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Signature;
