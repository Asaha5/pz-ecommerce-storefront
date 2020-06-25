import React from 'react'
import { Button } from 'semantic-ui-react'

const AppButton = ({title, iconRequired, icon, ...rest}) => {
    let props = {
        size: "large",
        color: "brown",
        ...rest
    }
    if(iconRequired){
        props = {
            ...props,
            icon,
            labelPosition: 'right'
        }
    }
    return (
        <Button {...props}>
            {title}
        </Button>
    )
}

export default AppButton;