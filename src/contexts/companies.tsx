import { useContext, createContext, useState, useMemo, useCallback, ReactElement } from 'react';

const companies = {
  MESILLA_VALLEY_TRANSPORTATION: {
    name: 'Mesilla Valley Transportation',
    logoURL: 'https://m-v-t.com/wp-content/uploads/2023/08/logo.png',
    websiteURL: 'www.m-v-t.com',
    brandColor: '#c02125',
    socialMedia: {
      facebook: {
        icon: 'https://i.ibb.co/dbYP654/FB-email-red-01.png',
        source: 'https://www.facebook.com/mesillavalleytransport/',
      },
      twitter: {
        icon: 'https://i.ibb.co/ZKWhkby/Twitter-email-red-01.png',
        source: 'https://twitter.com/MVTServices',
      },
      youtube: {
        icon: 'https://i.ibb.co/MsFBYJ7/YT-email-red-01.png',
        source: 'https://www.youtube.com/channel/UCANz_NAedSbFwiBrkZ8c5nA',
      },
      linkedin: {
        icon: 'https://i.ibb.co/hYKScqb/linkedin-email-red-01.png',
        source: 'https://www.linkedin.com/company/m-v-t/',
      },
      instagram: {
        icon: 'https://i.ibb.co/GtX9K3Z/IG-email-red-01.png',
        source: 'https://www.instagram.com/mesillavalleytransportation/',
      },
    },
  },
  BORDER_TIRE: {
    name: 'Border Tire',
    logoURL: '/assets/logos/border-tire.png',
    websiteURL: 'www.border-tire.com',
    brandColor: '#D14905',
    socialMedia: {
      facebook: {
        icon: '/assets/signature/social-media-icons/border-tire-facebook.png',
        source: 'https://www.facebook.com/BorderTire',
      },
      youtube: {
        icon: '/assets/signature/social-media-icons/border-tire-youtube.png',
        source: 'https://www.youtube.com/@bordertire6249/featured',
      },
      linkedin: {
        icon: '/assets/signature/social-media-icons/border-tire-linkedin.png',
        source: 'https://www.linkedin.com/company/border-tire/',
      },
      instagram: {
        icon: '/assets/signature/social-media-icons/border-tire-instagram.png',
        source: 'https://www.instagram.com/bordertire/',
      },
    },
  },
};

interface Company {
  name: string;
  logoURL: string;
  websiteURL: string;
  brandColor: string;
  socialMedia: {
    [key in 'facebook' | 'youtube' | 'twitter' | 'linkedin' | 'instagram']?: {
      source: string;
      icon: string;
    };
  };
}

type UseCompaniesResult = ReturnType<typeof useCompanies>;

const CompanyInformationContext = createContext<UseCompaniesResult>({
  companies: companies,
  selectedCompanyKey: 'MESILLA_VALLEY_TRANSPORTATION',
  setSelectedCompanyKey: () => {},
});

const useCompanies = (): {
  companies: Record<'MESILLA_VALLEY_TRANSPORTATION' | 'BORDER_TIRE', Company>;
  selectedCompanyKey: 'MESILLA_VALLEY_TRANSPORTATION' | 'BORDER_TIRE';
  setSelectedCompanyKey: (companyKey: 'MESILLA_VALLEY_TRANSPORTATION' | 'BORDER_TIRE') => void;
} => {
  const context = useContext(CompanyInformationContext);

  if (context === undefined) throw Error('useCompanies must be used inside company information provider');

  return context;
};

const CompanyInformationProvider = ({ children }: { children: ReactElement }) => {
  const { companies } = useCompanies();
  const [selectedCompanyKey, setSelectedCompanyKey] = useState<'MESILLA_VALLEY_TRANSPORTATION' | 'BORDER_TIRE'>(
    'MESILLA_VALLEY_TRANSPORTATION'
  );

  const handleSelectCompany = useCallback((companyKey: 'MESILLA_VALLEY_TRANSPORTATION' | 'BORDER_TIRE') => {
    setSelectedCompanyKey(companyKey);
  }, []);

  const values = useMemo(
    () => ({
      companies,
      selectedCompanyKey,
      setSelectedCompanyKey: handleSelectCompany,
    }),
    [companies, selectedCompanyKey, handleSelectCompany]
  );

  return <CompanyInformationContext.Provider value={values}>{children}</CompanyInformationContext.Provider>;
};

export default CompanyInformationProvider;

export { useCompanies };
