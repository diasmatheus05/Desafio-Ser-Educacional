import { useState } from "react";
import {
  Collapse,
  IconButton,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Button,
} from "@mui/material";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineDown,
  AiOutlineUp,
  AiOutlinePlus,
} from "react-icons/ai";

import useStyles from "./styles";

function createData(
  name: string,
  surname: string,
  phone: string,
  email: string,
  address: string,
  city: string,
  state: string,
  birth: string
) {
  return {
    name,
    surname,
    phone,
    email,
    details: { address, city, state, birth },
  };
}

const rows = [
  createData(
    "Matheus",
    "Dias",
    "(31) 985617214",
    "diasmatheus05@gmail.com",
    "Rua Washington, 684, Sion",
    "Belo Horizonte",
    "MG",
    "12/01/2001"
  ),
  createData(
    "Matheus",
    "Dias",
    "(31) 985617214",
    "diasmatheus05@gmail.com",
    "Rua Washington, 684, Sion",
    "Belo Horizonte",
    "MG",
    "12/01/2001"
  ),
  createData(
    "Matheus",
    "Dias",
    "(31) 985617214",
    "diasmatheus05@gmail.com",
    "Rua Washington, 684, Sion",
    "Belo Horizonte",
    "MG",
    "12/01/2001"
  ),
  createData(
    "Matheus",
    "Dias",
    "(31) 985617214",
    "diasmatheus05@gmail.com",
    "Rua Washington, 684, Sion",
    "Belo Horizonte",
    "MG",
    "12/01/2001"
  ),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ListContacts() {
  const classes = useStyles();

  function Row({ row }: { row: ReturnType<typeof createData> }) {
    const [open, setOpen] = useState(false);

    return (
      <>
        <StyledTableRow>
          <StyledTableCell>
            <IconButton onClick={() => setOpen(!open)}>
              {open ? <AiOutlineUp /> : <AiOutlineDown />}
            </IconButton>
          </StyledTableCell>
          <StyledTableCell>{row.name + " " + row.surname}</StyledTableCell>
          <StyledTableCell align="right">{row.phone}</StyledTableCell>
          <StyledTableCell align="right">{row.email}</StyledTableCell>
          <StyledTableCell align="center">
            <IconButton>
              <AiOutlineEdit size={24} />
            </IconButton>
          </StyledTableCell>
          <StyledTableCell align="center">
            <IconButton>
              <AiOutlineDelete size={24} />
            </IconButton>
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6">Detalhes</Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Data de Nascimento</StyledTableCell>
                      <StyledTableCell>Endereço</StyledTableCell>
                      <StyledTableCell>Cidade</StyledTableCell>
                      <StyledTableCell>Estado</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        {row.details.birth}
                      </StyledTableCell>
                      <StyledTableCell>{row.details.address}</StyledTableCell>
                      <StyledTableCell>{row.details.city}</StyledTableCell>
                      <StyledTableCell>{row.details.state}</StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </StyledTableRow>
      </>
    );
  }

  return (
    <div className={classes.listPage}>
      <div className={classes.header}>
        <Typography variant="h3">Lista de Contatos</Typography>
        <Button variant="contained" className={classes.addButton}>
          Adicionar <AiOutlinePlus size={20} />
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell align="right">Telefone</StyledTableCell>
              <StyledTableCell align="right">E-mail</StyledTableCell>
              <StyledTableCell align="center">Editar</StyledTableCell>
              <StyledTableCell align="center">Apagar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
