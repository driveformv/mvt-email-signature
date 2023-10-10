import Signature from "components/Signature/Signature";
import EmailTemplate from "components/email-template/email-template";
import SelectInput from "components/form/select-input/select-input";
import Button from "components/ui/button/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../layout.module.css";
import CompaniesProvider from "contexts/companies";

const SelectCompanyPage = () => {
  const companies = [
    {
      id: "MESILLA_VALLEY_TRANSPORTATION",
      href: "/mesilla-valley-transportation",
      name: "Mesilla Valley Transportation",
    },
    { id: "BORDER_TIRE", href: "/border-tire", name: "Border Tire" },
    {
      id: "BORDER_INTERNATIONAL",
      href: "/border-international",
      name: "Border International",
    },
    { id: "STAGECOACH", href: "/stagecoach", name: "Stagecoach" },
  ];

  const [selectedCompany, setSelectedCompany] = useState<
    | "MESILLA_VALLEY_TRANSPORTATION"
    | "BORDER_TIRE"
    | "BORDER_INTERNATIONAL"
    | "STAGECOACH"
  >("MESILLA_VALLEY_TRANSPORTATION");

  const navigate = useNavigate();

  const handleClick = () => {
    const selected = companies.find(
      (company) => company.id === selectedCompany
    );

    console.log(selected);

    if (selected) {
      navigate(selected?.href);
    }
  };

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.sidePanel}>
          <div className={styles.sidePanel_title}>Template Selection</div>
          <SelectInput
            name="company"
            label="Company"
            options={companies.map((company) => ({
              value: company.id,
              name: company.name,
            }))}
            value={selectedCompany}
            onChange={(e) =>
              setSelectedCompany(
                e.currentTarget.value as
                  | "MESILLA_VALLEY_TRANSPORTATION"
                  | "BORDER_TIRE"
              )
            }
          />
          <Button
            variant="primary"
            style={{ width: "100%" }}
            onClick={handleClick}
          >
            Continue
          </Button>
        </div>
        <div className={styles.mainPanel}>
          <CompaniesProvider
            company={selectedCompany || "MESILLA_VALLEY_TRANSPORTATION"}
          >
            <EmailTemplate signature={<Signature />} />
          </CompaniesProvider>
        </div>
      </div>
    </>
  );
};

export default SelectCompanyPage;
