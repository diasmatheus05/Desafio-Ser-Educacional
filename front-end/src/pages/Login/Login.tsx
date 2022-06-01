import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button
} from "@mui/material";

import { Input } from '../../components/Input'

import { Values } from "./types";
import useStyles from './styles'

export default function Login() {
  const navigate = useNavigate();
  const classes = useStyles();

  const [values, setValues] = useState<Values>({} as Values)
  const [error, setError] = useState(false)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [event.target.id]: event.target.value });
    setError(false)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (values.email === 'email@gmail.com' && values.password === 'password') navigate('/list')
    else setError(true)
  }

  return (
    <div className={classes.loginPage}>
      <Typography variant="h3" className={classes.header}>Lista de Contatos</Typography>

      <form className={classes.form} onSubmit={handleSubmit}>
        <Input name="email" label="E-mail" onChange={handleChange} />
        <Input name="password" label="Senha" onChange={handleChange} />

        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </form>

      {error && <Typography variant="body2"  className={classes.error}>E-mail e/ou senha errados</Typography>}
      <Typography variant="caption">E-mail: email@gmail.com</Typography>
      <Typography variant="caption">Senha: password</Typography>
    </div>
  )
}