import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme) =>
  createStyles({
    loginPage: {
      maxWidth: 500,
      margin: "0 auto",
      padding: "32px 0",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      width: "100%",
      textAlign: "center",
      marginBottom: 12,
    },
    form: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginBottom: 12,
    },
    error: {
      color: theme.palette.secondary.light,
      marginBottom: 12,
    },
  })
);
