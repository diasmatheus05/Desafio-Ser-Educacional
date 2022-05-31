import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme) =>
  createStyles({
    listPage: {
      maxWidth: 1000,
      margin: "0 auto",
      padding: "32px 0",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      width: "100%",

      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      marginBottom: 12,
    },
    addButton: {
      display: "flex",
      alignItems: "center",
      gap: 4,
    },
  })
);
