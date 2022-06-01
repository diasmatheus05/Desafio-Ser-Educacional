export interface Contact {
  id: string
  name: string
  surname: string
  phone: string
  email: string
  details: Details,
}

export interface Details {
  address: string 
  city: string 
  state: string 
  birth: string 
}