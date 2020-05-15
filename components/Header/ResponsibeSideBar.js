import React from 'react'
import styled from 'styled-components'
import {Button, SideSheet, Position, Text} from "evergreen-ui";

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;
  padding: 1rem 0;
  height: 200px;
`

const MenuItem = styled.li`
  border-bottom: 1px solid #ddebf7;
  width: 100%;
  padding: .5rem 1rem;
`

const ResponsiveSideBar = ({isShown, onClose}) => {
    return (
        <SideSheet
            isShown={isShown}
            onCloseComplete={onClose}
            width={'80%'}
            position={Position.LEFT}
        >
            <Menu>
                <MenuItem>
                    <Text>Toys</Text>
                </MenuItem>
                <MenuItem>
                    <Text>Wholesales</Text>
                </MenuItem>
                <MenuItem>
                    <Text>Sales</Text>
                </MenuItem>
                <MenuItem>
                    <Text>About Us</Text>
                </MenuItem>
                <MenuItem>
                    <Button height={25} marginRight={10} iconBefore="user" appearance="primary">
                        Sign In
                    </Button>
                </MenuItem>
            </Menu>
        </SideSheet>
    )
}

export default ResponsiveSideBar