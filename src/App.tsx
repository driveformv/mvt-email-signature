import CompaniesProvider from 'contexts/companies';
import BorderTireCreateSignaturePage from 'pages/border-tire-create-signature';
import MesillaValleyTransportationCreateSignaturePage from 'pages/mesilla-valley-transportation-create-signature';
import SelectCompanyPage from 'pages/select-company';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <CompaniesProvider>
      <Routes>
        <Route path="/" element={<SelectCompanyPage />} />
        <Route path="/mesilla-valley-transportation" element={<MesillaValleyTransportationCreateSignaturePage />} />
        <Route path="/border-tire" element={<BorderTireCreateSignaturePage />} />
      </Routes>
    </CompaniesProvider>
  );
};

export default App;
