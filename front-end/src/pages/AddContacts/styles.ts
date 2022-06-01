import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme) =>
  createStyles({
    addPage: {
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
    form: {
      width: "100%",
    },
    formFields: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginBottom: 20,
    },
  })
);
