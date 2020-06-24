import React from 'react'
import styles from './styles.module.scss'
import { Menu, Segment, Sidebar } from 'semantic-ui-react'


const ResponsiveSidebar = ({children, visible, toggleSidebar, menuItems}) => {
    return (
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                onHide={toggleSidebar}
                vertical
                visible={visible}
            >
                {
                    menuItems.map((menu, idx) => {
                        return (
                            <Menu.Item key={`menu_${idx}`} className={styles.headerLink}>
                                {menu}
                            </Menu.Item>
                        )
                    })
                }
            </Sidebar>
            <Sidebar.Pusher>
                {children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
}

export default ResponsiveSidebar