import styles from '../layout.module.css';
import { useCompanies } from 'contexts/companies';
import Button from 'components/ui/button/button';
import Signature from 'components/Signature/Signature';
import EmailTemplate from 'components/email-template/email-template';
import { useNavigate } from 'react-router-dom';
import SelectInput from 'components/form/select-input/select-input';

const SelectCompanyPage = () => {
  const { companies, selectedCompanyKey, setSelectedCompanyKey } = useCompanies();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      companies[selectedCompanyKey as 'MESILLA_VALLEY_TRANSPORTATION' | 'BORDER_TIRE'].name
        .toLowerCase()
        .replace(/\s+/g, '-')
    );
  };

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.sidePanel}>
          <div className={styles.sidePanel_title}>Template Selection</div>
          <SelectInput
            name="company"
            label="Company"
            options={Object.keys(companies).map((companyKey) => ({
              value: companyKey,
              name: companies[companyKey as 'MESILLA_VALLEY_TRANSPORTATION' | 'BORDER_TIRE'].name,
            }))}
            value={selectedCompanyKey}
            onChange={(e) => setSelectedCompanyKey(e.target.value as 'MESILLA_VALLEY_TRANSPORTATION' | 'BORDER_TIRE')}
          />
          <Button variant="primary" style={{ width: '100%' }} onClick={handleClick}>
            Continue
          </Button>
        </div>
        <div className={styles.mainPanel}>
          <EmailTemplate signature={<Signature />} />
        </div>
      </div>
    </>
  );
};

export default SelectCompanyPage;
