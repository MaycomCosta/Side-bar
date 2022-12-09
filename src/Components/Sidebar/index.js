import React from 'react'
import * as C from './styles'
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

    const closeSidebar = () => {
      active(false)
    }

  return (
    <C.Container sidebar={active}>
      <FaTimes onClick={closeSidebar}/>
      <C.Content>
        <SidebarItem Icon={FaHome} Text='home' />
        <SidebarItem Icon={FaChartBar} Text='Statistics' />
        <SidebarItem Icon={FaUserAlt} Text='Users' />
        <SidebarItem Icon={FaEnvelope} Text='Mail' />
        <SidebarItem Icon={FaIdCardAlt} Text='Employees' />
        <SidebarItem Icon={FaRegFileAlt} Text='Reports' />
        <SidebarItem Icon={FaRegSun} Text='Settings' />
      </C.Content>

    </C.Container>
  )
}

export default Sidebar
