import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ContactContextProvider } from '../contexts/ContactsContext'

import { AddContacts } from '../pages/AddContacts'
import { ListContacts } from '../pages/ListContacts'
import { Login } from '../pages/Login'

export default function Router() {
  return (
    <BrowserRouter>
      <ContactContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/list" element={<ListContacts />} />
          <Route path="/add" element={<AddContacts />}  />
        </Routes>
      </ContactContextProvider>
    </BrowserRouter>
  )
}