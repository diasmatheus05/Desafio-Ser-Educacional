import { TextField } from "@mui/material";
import { InputProps } from "./types";

export default function Input({ name, label, onChange }: InputProps) {
  return (
    <TextField id={name} name={name} label={label} variant="outlined" onChange={onChange} />
  )
}