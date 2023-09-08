import BorderTireCreateSignaturePage from 'pages/border-tire-create-signature';
import MesillaValleyTransportationCreateSignaturePage from 'pages/mesilla-valley-transportation-create-signature';
import BorderInternationalCreateSignaturePage from 'pages/border-international-create-signature';
import StagecoachCreateSignaturePage from 'pages/stagecoach-create-signature';
import SelectCompanyPage from 'pages/select-company';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectCompanyPage />} />
      <Route path="/mesilla-valley-transportation" element={<MesillaValleyTransportationCreateSignaturePage />} />
      <Route path="/border-tire" element={<BorderTireCreateSignaturePage />} />
      <Route path="/border-international" element={<BorderInternationalCreateSignaturePage />} />
      <Route path="/stagecoach" element={<StagecoachCreateSignaturePage />} />
    </Routes>
  );
};

export default App;
