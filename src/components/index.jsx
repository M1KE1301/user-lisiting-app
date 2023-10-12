import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className="d-flex flex-nowrap">
        <div className="w-100 overflow-auto main-wrapper min-vh-100 d-flex flex-column">
            <Header />
            <section style={{ width: "100%"}}>
              <Outlet />
            </section>
            <Footer />
        </div>
    </main>
  )
}

export default Layout;