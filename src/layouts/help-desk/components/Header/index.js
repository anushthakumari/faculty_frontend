import React, { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { List, ListItem, ListItemButton, ListItemText, Collapse } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

import i18next from "i18n";

// Images
import backgroundImage from "assets/images/bg-profile.jpeg";

function Header({ children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      >
        <MDTypography variant="h1" color="white">
          Get Help
        </MDTypography>
      </MDBox>
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <MDBox display="flex" justifyContent="center" alignItems="center" mb={3}>
          <TextField
            placeholder="Search Here..."
            variant="outlined"
            sx={{ width: "80%" }}
            inputProps={{
              style: {
                padding: "15px",
                fontSize: "20px",
                fontWeight: "bold",
              },
            }}
            size="large"
          />
        </MDBox>
        <MDBox display="flex" justifyContent="center" alignItems="center">
          <MDBox maxWidth="70%">
            <FaqList questions={ques} />
          </MDBox>
        </MDBox>
        {children}
      </Card>
    </MDBox>
  );
}

const FaqList = ({ questions }) => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleOpen = (index) => {
    setOpenQuestions((prevState) =>
      prevState.includes(index) ? prevState.filter((i) => i !== index) : [index]
    );
  };

  return (
    <List>
      {questions.map((question, index) => (
        <React.Fragment key={question.id}>
          <ListItemButton
            sx={{ marginTop: "20px", border: "1px solid #d3d3d3", borderRadius: "5px" }}
            onClick={() => toggleOpen(index)}
          >
            <ListItemText primary={question.question} />
          </ListItemButton>
          <Collapse in={openQuestions.includes(index)}>
            <ListItem>
              <ListItemText secondary={question.answer} />
            </ListItem>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

const ques = [
  {
    id: 1,
    question: i18next.t("help_desk.faqs.que1"),
    answer: i18next.t("help_desk.faqs.ans_1"),
  },
  {
    id: 2,
    question: i18next.t("help_desk.faqs.que_2"),
    answer: i18next.t("help_desk.faqs.ans_2"),
  },
  {
    id: 3,
    question: i18next.t("help_desk.faqs.que_3"),
    answer: i18next.t("help_desk.faqs.ans_3"),
  },
  {
    id: 4,
    question: i18next.t("help_desk.faqs.que_4"),
    answer: i18next.t("help_desk.faqs.ans_4"),
  },
  {
    id: 5,
    question: i18next.t("help_desk.faqs.que_5"),
    answer: i18next.t("help_desk.faqs.ans_5"),
  },
  {
    id: 6,
    question: i18next.t("help_desk.faqs.que_6"),
    answer: i18next.t("help_desk.faqs.ans_6"),
  },
  {
    id: 7,
    question: i18next.t("help_desk.faqs.que_7"),
    answer: i18next.t("help_desk.faqs.ans_7"),
  },
  {
    id: 8,
    question: i18next.t("help_desk.faqs.que_8"),
    answer: i18next.t("help_desk.faqs.ans_8"),
  },
  // You can add additional questions here…
];

export default Header;
