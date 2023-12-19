// @mui material components
import Grid from "@mui/material/Grid";
import Board from "../../components/Board";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import makeStyles from "@mui/material/makeStyles";
import { makeStyles } from "@mui/styles";

import { useTranslation } from "react-i18next";
import { Card, Typography } from "@mui/material";

function LeaderBoard() {
  const { t } = useTranslation();
  const leaderboardData = [
    { user: "Teacher1", score: 100 },
    { user: "Teacher2", score: 90 },
    { user: "Teacher3", score: 80 },
    { user: "Teacher4", score: 60 },
    { user: "Teacher5", score: 40 },
    // Add more data as needed
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          {/* <Typography>This is leaderboard</Typography> */}
          <Board data={leaderboardData} />
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default LeaderBoard;

// const Board = ({ data }) => {
//   const classes = useStyles();
//   const useStyles = makeStyles((theme) => ({
//     tableContainer: {
//       maxWidth: 600,
//       margin: "auto",
//       marginTop: theme.spacing(2),
//     },
//     tableHeaderCell: {
//       fontWeight: "bold",
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.primary.contrastText,
//     },
//   }));
//   return (
//     <TableContainer component={Paper} className={classes.tableContainer}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell className={classes.tableHeaderCell}>Rank</TableCell>
//             <TableCell className={classes.tableHeaderCell}>User</TableCell>
//             <TableCell className={classes.tableHeaderCell}>Score</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((item, index) => (
//             <TableRow key={index}>
//               <TableCell>{index + 1}</TableCell>
//               <TableCell>{item.user}</TableCell>
//               <TableCell>{item.score}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

//   const App = () => {
//     return (
//       <div>
//         <h1>Leaderboard</h1>
//         <Leaderboard data={leaderboardData} />
//       </div>
//     );
//   };
