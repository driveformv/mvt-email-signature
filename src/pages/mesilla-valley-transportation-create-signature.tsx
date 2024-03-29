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

const CreateSignaturePage = () => {
  const navigate = useNavigate();
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const signatureRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    department: '',
    cellNumber: '',
    officeNumber: '',
    officeExt: '',
    email: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

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

  return (
    <CompaniesProvider company="MESILLA_VALLEY_TRANSPORTATION">
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
            options={[
              { value: '575.524.2835', name: '575.524.2835 (Las Cruces Office)' },
              { value: '915.791.4000', name: '915.791.4000 (El Paso Terminal)' },
              { value: '915.791.8730', name: '915.791.8730 (El Paso Recruiting)' },
              { value: '615.691.4367', name: '615.691.4367 (Nashville Terminal)' },
              { value: '303.426.4174', name: '303.426.4174 (Denver Terminal)' },
              { value: '956.717.9849', name: '956.717.9849 (Laredo Terminal)' },
              { value: '520.761.3264', name: '520.761.3264 (Nogales)' },
            ]}
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

export default CreateSignaturePage;
