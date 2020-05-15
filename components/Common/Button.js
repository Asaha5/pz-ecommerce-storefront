import React from 'react'
import { Button } from 'evergreen-ui'

const AppButton = ({title, iconRequired, icon, ...rest}) => {
    let props = {
        height: 38,
        appearance: "primary",
        ...rest
    }
    if(iconRequired){
        props = {
            ...props,
            iconBefore: icon
        }
    }
    return (
        <Button {...props}>
            {title}
        </Button>
    )
}

export default AppButton;