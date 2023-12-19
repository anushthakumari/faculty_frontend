import { useTranslation } from "react-i18next";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/help-desk/components/Header";
import HelpForm from "./components/HelpForm";
import GForm from "./GForm";

function Overview() {
  return (
    <DashboardLayout>
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <HelpForm />
          <GForm />
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
