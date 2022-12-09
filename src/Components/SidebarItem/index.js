import React from 'react'
import * as C from './styles'


const SidebarItem = ({ Icon, Text }) => {

  return (
    <C.Container>
      <Icon />
      {Text}
    </C.Container>
  )
}

export default SidebarItem
