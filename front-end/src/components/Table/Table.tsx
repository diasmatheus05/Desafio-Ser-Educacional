import { useState } from "react";
import {
  styled,
  Table as MuiTable,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  IconButton,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";

import { TableProps, RowProps } from "./types";

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

export default function Table({ columns, rows, onClickDelete }: TableProps) {
  return (
    <TableContainer>
      <MuiTable>
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            {columns.map((col, index) => <StyledTableCell align={col.align}>{col.label}</StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} onClickDelete={onClickDelete} />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}

function Row({ row, onClickDelete }: RowProps) {
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
          <IconButton onClick={() => onClickDelete(row.id)}>
            <AiOutlineDelete size={24} />
          </IconButton>
        </StyledTableCell>
      </StyledTableRow>

      <StyledTableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6">Detalhes</Typography>
              <MuiTable size="small" aria-label="purchases">
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
              </MuiTable>
            </Box>
          </Collapse>
        </TableCell>
      </StyledTableRow>
    </>
  );
}