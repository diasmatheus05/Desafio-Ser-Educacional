import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { uuid } from 'uuidv4';

import { Input } from "../../components/Input";
import { useContactsContext } from "../../contexts/ContactsContext";

import useStyles from './styles'
import { Values } from "./types";
import { Contact } from '../../types'

export default function AddContacts() {
  const navigate = useNavigate();
  const classes = useStyles();

  const { addContact } = useContactsContext()

  const [values, setValues] = useState<Values>({} as Values)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [event.target.id]: event.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const contact: Contact = {
      id: uuid(),
      name: values.name,
      surname: values.surname,
      phone: values.phone,
      email: values.email,
      details: {
        birth: values.birth,
        address: values.address_street + ', ' + values.address_number + ', ' + values.address_district,
        city: values.city,
        state: values.state
      }
    }
    addContact(contact)
    navigate('/list')
  }

  return (
    <div className={classes.addPage}>
      <div className={classes.header}>
        <Typography variant="h3">Adcionar Contato</Typography>
        <Button variant="contained" onClick={() => navigate('/list')}>
          Ver lista de contatos
        </Button>
      </div>

      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formFields}>
          <Input name="name" label="Nome" onChange={handleChange} />
          <Input name="surname" label="Sobrenome" onChange={handleChange} />
          <Input name="phone" label="Telefone" onChange={handleChange} />
          <Input name="email" label="E-mail" onChange={handleChange} />
          <Input name="birth" label="Data de nascimento" onChange={handleChange} />
          <Input name="address_street" label="Rua" onChange={handleChange} />
          <Input name="address_number" label="Número" onChange={handleChange} />
          <Input name="address_district" label="Bairro" onChange={handleChange} />
          <Input name="city" label="Cidade" onChange={handleChange} />
          <Input name="state" label="Estado" onChange={handleChange} />
        </div>
       

        <Button variant="contained" type="submit">
          Salvar
        </Button>
      </form>
    </div>
  )
}