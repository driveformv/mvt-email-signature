import { useContext, createContext, useState, useMemo, useCallback, ReactElement } from 'react';

const companies = {
  MESILLA_VALLEY_TRANSPORTATION: {
    name: 'Mesilla Valley Transportation',
    logoURL: 'https://saprodmrktngemailsigw2.blob.core.windows.net/assets/mvt/logo.png',
    websiteURL: 'www.m-v-t.com',
    brandColor: '#c02125',
    socialMedia: {
      facebook: {
        icon: 'https://saprodmrktngemailsigw2.blob.core.windows.net/assets/mvt/facebook-icon.png',
        source: 'https://www.facebook.com/mesillavalleytransport/',
      },
      twitter: {
        icon: 'https://saprodmrktngemailsigw2.blob.core.windows.net/assets/mvt/twitter-icon.png',
        source: 'https://twitter.com/MVTServices',
      },
      youtube: {
        icon: 'https://saprodmrktngemailsigw2.blob.core.windows.net/assets/mvt/youtube-icon.png',
        source: 'https://www.youtube.com/channel/UCANz_NAedSbFwiBrkZ8c5nA',
      },
      linkedin: {
        icon: 'https://saprodmrktngemailsigw2.blob.core.windows.net/assets/mvt/linkedin-icon.png',
        source: 'https://www.linkedin.com/company/m-v-t/',
      },
      instagram: {
        icon: 'https://saprodmrktngemailsigw2.blob.core.windows.net/assets/mvt/instagram-icon.png',
        source: 'https://www.instagram.com/mesillavalleytransportation/',
      },
    },
  },
  BORDER_TIRE: {
    name: 'Border Tire',
    logoURL: 'https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-tire/logo.png',
    websiteURL: 'www.border-tire.com',
    brandColor: '#D14905',
    socialMedia: {
      facebook: {
        icon: 'https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-tire/facebook-icon.png',
        source: 'https://www.facebook.com/BorderTire',
      },
      youtube: {
        icon: 'https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-tire/youtube-icon.png',
        source: 'https://www.youtube.com/@bordertire6249/featured',
      },
      linkedin: {
        icon: 'https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-tire/linkedin-icon.png',
        source: 'https://www.linkedin.com/company/border-tire/',
      },
      instagram: {
        icon: 'https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-tire/instagram-icon.png',
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
