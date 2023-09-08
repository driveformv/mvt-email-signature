import PhoneNumberInput from 'components/PhoneNumberInput';
import Signature from 'components/Signature/Signature';
import EmailTemplate from 'components/email-template/email-template';
import TextInput from 'components/form/input/input';
import SelectInput from 'components/form/select-input/select-input';
import Button from 'components/ui/button/button';
import CompaniesProvider from 'contexts/companies';
import styles from 'layout.module.css';
import { ChangeEvent, useRef, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { EmailSignatureCopier } from 'util/email-signature-copier';

const BorderTireCreateSignaturePage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    department: '',
    cellNumber: '',
    officeNumber: '',
    officeExt: '',
    email: '',
  });
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const navigate = useNavigate();

  const signatureRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setIsAlertVisible(true);

    if (signatureRef.current) {
      const emailSignatureCopier = new EmailSignatureCopier(signatureRef.current);

      emailSignatureCopier.copy();

      setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);
    }
  };

  const handleResetClick = () => {
    setFormData({
      fullName: '',
      jobTitle: '',
      department: '',
      cellNumber: '',
      officeNumber: '',
      officeExt: '',
      email: '',
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <CompaniesProvider company="STAGECOACH">
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
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <TextInput
            label="Job title"
            placeholder="Customer Service Representative"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
          />
          <TextInput
            label="Department"
            placeholder="Customer Service"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          />
          <TextInput
            label="Email"
            placeholder="john.doe@domain.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <SelectInput
            name="officeNumber"
            label="Office number"
            placeholder="Select office number"
            options={[{ value: '800.327.1204', name: '800.327.1204' }]}
            value={formData.officeNumber}
            onChange={handleInputChange}
          />
          <TextInput
            label="Ext (optional)"
            placeholder="1234"
            name="officeExt"
            value={formData.officeExt}
            onChange={handleInputChange}
          />
          <PhoneNumberInput
            label="Cell Number (optional)"
            placeholder="123.456.7890"
            name="cellNumber"
            value={formData.cellNumber}
            onChange={(formattedNumber: string) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                cellNumber: formattedNumber,
              }));
            }}
          />
          <Button onClick={handleResetClick} style={{ width: '100%', marginBottom: '1rem' }}>
            Reset
          </Button>
          <Button
            variant="primary"
            style={{ width: '100%' }}
            onClick={handleClick}
            disabled={
              !(
                formData.fullName.length &&
                formData.jobTitle.length &&
                formData.department.length &&
                formData.email.length &&
                formData.officeNumber.length
              ) || isAlertVisible
            }
          >
            {isAlertVisible ? 'Signature Copied' : 'Copy Signature'}
          </Button>
        </div>
        <div className={styles.mainPanel}>
          <EmailTemplate signature={<Signature signatureRef={signatureRef} signatureDetails={formData} />} />
        </div>
      </div>
    </CompaniesProvider>
  );
};

export default BorderTireCreateSignaturePage;
