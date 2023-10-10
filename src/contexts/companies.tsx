import { ReactElement, createContext, useContext } from "react";

interface Company {
  id: string;
  name: string;
  logoURL: string;
  websiteURL: string;
  brandColor: string;
  socialMedia: Partial<
    Record<
      "facebook" | "youtube" | "twitter" | "linkedin" | "instagram" | "tiktok",
      {
        source: string;
        icon: string;
      }
    >
  >;
}

type CompanyKey =
  | "MESILLA_VALLEY_TRANSPORTATION"
  | "BORDER_TIRE"
  | "BORDER_INTERNATIONAL"
  | "STAGECOACH";

const companies: Record<CompanyKey, Company> = {
  MESILLA_VALLEY_TRANSPORTATION: {
    id: "MESILLA_VALLEY_TRANSPORTATION",
    name: "Mesilla Valley Transportation",
    logoURL:
      "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/mvt/logo.png",
    websiteURL: "www.m-v-t.com",
    brandColor: "#c02125",
    socialMedia: {
      facebook: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/mvt/facebook-icon.png",
        source: "https://www.facebook.com/mesillavalleytransport/",
      },
      twitter: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/mvt/twitter-icon.png",
        source: "https://twitter.com/MVTServices",
      },
      youtube: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/mvt/youtube-icon.png",
        source: "https://www.youtube.com/channel/UCANz_NAedSbFwiBrkZ8c5nA",
      },
      linkedin: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/mvt/linkedin-icon.png",
        source: "https://www.linkedin.com/company/m-v-t/",
      },
      instagram: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/mvt/instagram-icon.png",
        source: "https://www.instagram.com/mesillavalleytransportation/",
      },
    },
  },
  BORDER_TIRE: {
    id: "BORDER_TIRE",
    name: "Border Tire",
    logoURL:
      "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-tire/logo.png",
    websiteURL: "www.border-tire.com",
    brandColor: "#D14905",
    socialMedia: {
      facebook: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-tire/facebook-icon.png",
        source: "https://www.facebook.com/BorderTire",
      },
      youtube: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-tire/youtube-icon.png",
        source: "https://www.youtube.com/@bordertire6249/featured",
      },
      linkedin: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-tire/linkedin-icon.png",
        source: "https://www.linkedin.com/company/border-tire/",
      },
      instagram: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-tire/instagram-icon.png",
        source: "https://www.instagram.com/bordertire/",
      },
    },
  },
  BORDER_INTERNATIONAL: {
    id: "BORDER_INTERNATIONAL",
    name: "Border International",
    logoURL:
      "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-international/logo.png",
    websiteURL: "www.borderint.com",
    brandColor: "#D14905",
    socialMedia: {
      facebook: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-international/facebook-icon.png",
        source: "https://www.facebook.com/BorderIntTrucks",
      },
      instagram: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-international/instagram-icon.png",
        source: "https://instagram.com/borderinternationaltrucks",
      },
      linkedin: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/border-international/linkedin-icon.png",
        source: "https://www.linkedin.com/company/borderinternationaltrucks",
      },
    },
  },
  STAGECOACH: {
    id: "STAGECOACH",
    name: "Stagecoach",
    logoURL:
      "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/stagecoach/logo.png",
    websiteURL: "www.stagecoachcartage.com",
    brandColor: "#926c41",
    socialMedia: {
      facebook: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/stagecoach/facebook-icon.png",
        source: "https://www.facebook.com/stagecoachcartage",
      },
      instagram: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/stagecoach/instagram-icon.png",
        source: "https://www.instagram.com/stagecoachcartage",
      },
      linkedin: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/stagecoach/linkedin-icon.png",
        source:
          "https://www.linkedin.com/company/stagecoach-cartage-and-distribution",
      },
      tiktok: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/stagecoach/tiktok-icon.png",
        source: "https://www.tiktok.com/@stagecoachcartage",
      },
      twitter: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/stagecoach/twitter-icon.png",
        source: "https://twitter.com/_Stagecoach",
      },
      youtube: {
        icon: "https://saprodmrktngemailsigw2.blob.core.windows.net/assets/stagecoach/youtube-icon.png",
        source: "https://www.youtube.com/channel/UCaDINRfulcxsqAviBdcAhqA",
      },
    },
  },
};

const CompanyInformationContext = createContext<Company | null>(null);

const useCompanies = (): Company | null => {
  const context = useContext(CompanyInformationContext);

  if (context === undefined)
    throw Error(
      "useCompanies must be used inside company information provider"
    );

  return context;
};

const CompanyInformationProvider = ({
  children,
  company,
}: {
  children: ReactElement;
  company:
    | "MESILLA_VALLEY_TRANSPORTATION"
    | "BORDER_TIRE"
    | "BORDER_INTERNATIONAL"
    | "STAGECOACH";
}) => {
  return (
    <CompanyInformationContext.Provider value={companies[company]}>
      {children}
    </CompanyInformationContext.Provider>
  );
};

export default CompanyInformationProvider;

export { useCompanies };
