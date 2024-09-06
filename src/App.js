import ClientHome from "./Pages/ClientHome";
import ClientHomeNavbar from "./Components/ClientHomeNavBar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import ClientProfileView from "./Pages/ClientProfileView";
import ServiceProviderList from "./Pages/ServiceProviderList";

import AdvocatesList from "./Data/Advocates.json";
import LawFirmsList from "./Data/LawFirmsList.json";
import ArbitratorsList from "./Data/Arbitrators.json";
import MediatorsList from "./Data/Mediators.json";
import NotariesList from "./Data/Notaries.json";
import DeedWritersList from "./Data/DeedWriters.json";
import TaxConsultantsList from "./Data/TaxConsultants.json";

import ServiceProviderProfile from "./Pages/ServiceProviderProfile";
import NotFound404 from "./Components/NotFound404";
import ProvidersDash from "./Components/ProviderDashboard/ProvidersDash";

import Signinup from "./Components/Signinup";

//checking for authorization

import RegisterProvider from "./Components/Registration/Provider/Lawyer/RegisterProvider";
import UserSelection from "./Components/UserSelection";
import Registerclient from "./Components/Registration/Client/Registerclient";
import RegisterLawFirm from "./Components/Registration/Provider/LawFirm/RegisterLawFirm";
import RegistrationSuccess from "./Components/Registration/Provider/RegisterationSuccess";
import Appointment from "./Components/ProviderDashboard/Appointment";
import AppointmentRequest from "./Components/ProviderDashboard/AppointmentRequest";
import RequestAppointment from "./Components/RequestAppointment";
import AppointmentHistory from "./Components/ProviderDashboard/AppointmentHistory";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
function App() {
  return (
    <div className="flex flex-col w-full">
      <ClientHomeNavbar />
      <Routes>
        <Route path="/" element={<ClientHome />} />
        <Route path="/profile" element={<ClientProfileView />} />
        <Route
          path="/advocates"
          element={
            <ServiceProviderList
              list={AdvocatesList}
              providerType="advocates"
            />
          }
        />
        <Route path="/advocates/:id" element={<ServiceProviderProfile />} />
        <Route
          path="/law-firms"
          element={
            <ServiceProviderList list={LawFirmsList} providerType="law-firms" />
          }
        />
        <Route
          path="/law-firms"
          element={
            <ServiceProviderList list={LawFirmsList} providerType="law-firms" />
          }
        />
        <Route
          path="/arbitrators"
          element={
            <ServiceProviderList
              list={ArbitratorsList}
              providerType="law-firms"
            />
          }
        />
        <Route
          path="/notaries"
          element={
            <ServiceProviderList list={NotariesList} providerType="law-firms" />
          }
        />
        <Route
          path="/mediators"
          element={
            <ServiceProviderList
              list={MediatorsList}
              providerType="law-firms"
            />
          }
        />
        <Route
          path="/deed-writers"
          element={
            <ServiceProviderList
              list={DeedWritersList}
              providerType="law-firms"
            />
          }
        />
        <Route
          path="/tax-consultants"
          element={
            <ServiceProviderList
              list={TaxConsultantsList}
              providerType="advocates"
            />
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/providerRegister" element={<RegisterProvider />} />
        <Route path="/UserSelection" element={<UserSelection />} />
        <Route path="/clientRegister" element={<Registerclient />} />

        <Route path="/providerRegister" element={<RegisterProvider />} />

        <Route path="/providerRegister" element={<RegisterProvider />} />

        <Route path="/providerRegister" element={<RegisterProvider />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/AppRequest" element={<AppointmentRequest />} />
        <Route path="/AppHistory" element={<Appointment />} />
        <Route path="/UserSelection" element={<UserSelection />} />
        <Route path="/clientRegister" element={<Registerclient />} />
        <Route path="/LawFirmRegister" element={<RegisterLawFirm />} />
        <Route path="/ProviderDash" element={<ProvidersDash />} />
        <Route path="/not-found" element={<NotFound404 />} />

        <Route path="/success" element={<RegistrationSuccess />} />
        <Route path="/request-appointment" element={<RequestAppointment />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
