import {
  Typography,
  Button,
} from "@mui/material";
import {
  AiOutlinePlus,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Table } from '../../components/Table'
import useStyles from "./styles";

import { useContactsContext } from "../../contexts/ContactsContext";

export default function ListContacts() {
  const navigate = useNavigate();
  const classes = useStyles();

  const { contacts, deleteContact } = useContactsContext()

  return (
    <div className={classes.listPage}>
      <div className={classes.header}>
        <Typography variant="h3">Lista de Contatos</Typography>
        <Button variant="contained" className={classes.addButton} onClick={() => navigate('/add')}>
          Adicionar <AiOutlinePlus size={20} />
        </Button>
      </div>
      <Table 
        columns={[
          { label: 'Nome', align: 'left' },
          { label: 'Telefone', align: 'right' },
          { label: 'E-mail', align: 'right' },
          { label: 'Editar', align: 'center' },
          { label: 'Apagar', align: 'center' }
        ]} 
        rows={contacts}
        onClickDelete={id => deleteContact(id)}
      />
    </div>
  );
}
