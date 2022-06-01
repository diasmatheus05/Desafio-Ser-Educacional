export interface TableProps {
  columns: { 
    label: string
    align: 'center' | 'right' | 'left' 
  }[]
  rows: Row[]
  onClickDelete: (id: string) => void
}

export interface RowProps {
  row: Row
  onClickDelete: (id: string) => void
}

interface Row {
  id: string
  name: string
  surname: string
  phone: string
  email: string
  details: Details,
}

interface Details {
  address: string 
  city: string 
  state: string 
  birth: string 
}