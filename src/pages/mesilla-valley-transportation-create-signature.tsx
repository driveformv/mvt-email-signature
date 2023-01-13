import styles from 'layout.module.css';
import EmailTemplate from 'components/email-template/email-template';
import Signature from 'components/Signature/Signature';
import { useEffect, useRef, useState } from 'react';
import TextInput from 'components/form/input/input';
import SelectInput from 'components/form/select-input/select-input';
import Button from 'components/ui/button/button';
import { useCompanies } from 'contexts/companies';
import PhoneNumberInput from 'components/PhoneNumberInput';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const CreateSignaturePage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [officeNumber, setOfficeNumber] = useState('');
  const [officeExt, setOfficeExt] = useState('');
  const [email, setEmail] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const { setSelectedCompanyKey } = useCompanies();
  const signatureRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setIsAlertVisible(true);

    if (signatureRef.current) {
      signatureRef.current.contentEditable = 'true';
      signatureRef.current.focus();
      document.execCommand('selectAll');
      document.execCommand('copy');
      signatureRef.current.contentEditable = 'false';

      const selection = getSelection();

      if (selection) {
        selection.empty();
      }

      setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);
    }
  };

  const handleResetClick = () => {
    setFullName('');
    setJobTitle('');
    setDepartment('');
    setCellNumber('');
    setOfficeNumber('');
    setOfficeExt('');
    setEmail('');
  };

  useEffect(() => {
    setSelectedCompanyKey('MESILLA_VALLEY_TRANSPORTATION');
  }, [setSelectedCompanyKey]);

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.sidePanel}>
          <Button style={{ marginBottom: '1rem' }} onClick={() => navigate('/')}>
            <BiArrowBack style={{ marginRight: '0.5rem' }} />
            Back
          </Button>
          <div className={styles.sidePanel_title}>Signature Information</div>
          <TextInput
            label="Full name"
            placeholder="John Doe"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextInput
            label="Job title"
            placeholder="Customer Service Representative"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <TextInput
            label="Department"
            placeholder="Customer Service"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <TextInput
            label="Email"
            placeholder="john.doe@domain.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SelectInput
            name="officeNumber"
            label="Office number"
            placeholder="Select office number"
            options={[
              { value: '575.524.2835', name: '575.524.2835 (Las Cruces Office)' },
              { value: '915.791.4000', name: '915.791.4000 (El Paso Terminal)' },
              { value: '915.791.8730', name: '915.791.8730 (El Paso Recruiting)' },
              { value: '615.691.4367', name: '615.691.4367 (Nashville Terminal)' },
              { value: '303.426.4174', name: '303.426.4174 (Denver Terminal)' },
              { value: '956.717.9849', name: '956.717.9849 (Laredo Terminal)' },
              { value: '520.761.3264', name: '520.761.3264 (Nogales)' },
            ]}
            value={officeNumber}
            onChange={(e) => setOfficeNumber(e.target.value)}
          />
          <TextInput
            label="Ext (optional)"
            placeholder="1234"
            name="ext"
            value={officeExt}
            onChange={(e) => setOfficeExt(e.target.value)}
          />
          <PhoneNumberInput
            label="Cell Number (optional)"
            placeholder="123.456.7890"
            name="cellNumber"
            value={cellNumber}
            onChange={(formattedNumber: string) => setCellNumber(formattedNumber)}
          />
          <Button onClick={handleResetClick} style={{ width: '100%', marginBottom: '1rem' }}>
            Reset
          </Button>
          <Button
            variant="primary"
            style={{ width: '100%' }}
            onClick={handleClick}
            disabled={
              !(fullName.length && jobTitle.length && department.length && email.length && officeNumber.length) ||
              isAlertVisible
            }
          >
            {isAlertVisible ? 'Signature Copied' : 'Copy Signature'}
          </Button>
        </div>
        <div className={styles.mainPanel}>
          <EmailTemplate
            signature={
              <Signature
                signatureRef={signatureRef}
                signatureDetails={{ fullName, jobTitle, department, email, officeNumber, officeExt, cellNumber }}
              />
            }
          />
        </div>
      </div>
    </>
  );
};

export default CreateSignaturePage;
