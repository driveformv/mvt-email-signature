import styles from 'layout.module.css';
import EmailTemplate from 'components/email-template/email-template';
import Signature from 'components/Signature/Signature';
import { useRef, useState } from 'react';
import TextInput from 'components/form/input/input';
import SelectInput from 'components/form/select-input/select-input';
import Button from 'components/ui/button/button';
import { useCompanies } from 'contexts/companies';
import { useEffect } from 'react';
import PhoneNumberInput from 'components/PhoneNumberInput';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const BorderTireCreateSignaturePage = () => {
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [officeNumber, setOfficeNumber] = useState('');
  const [officeExt, setOfficeExt] = useState('');
  const [email, setEmail] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const { setSelectedCompanyKey } = useCompanies();
  const navigate = useNavigate();

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
    setSelectedCompanyKey('BORDER_TIRE');
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
              { value: '956.217.5272', name: '956.217.5272 (Laredo, TX)' },
              { value: '661.391.5900', name: '661.391.5900 (Bakersfield, CA)' },
              { value: '951.371.1704', name: '951.371.1704 (Corona, CA)' },
              { value: '909.429.6876', name: '909.429.6876 (Fontana, CA)' },
              { value: '619.596.8473', name: '619.596.8473 (Lakeside, CA)' },
              { value: '657.999.4210', name: '657.999.4210 (Paramount, CA)' },
              { value: '619.671.0570', name: '619.671.0570 (San Diego, CA)' },
              { value: '602.252.2625', name: '602.252.2625 (Phoenix, AZ)' },
              { value: '575.288.3349', name: '575.288.3349 (Las Cruces, NM)' },
              { value: '915.872.2283', name: '915.872.2283 (El Paso, TX)' },
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

export default BorderTireCreateSignaturePage;
