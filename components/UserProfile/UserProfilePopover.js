import React, { useState } from 'react';
import {SelectMenu, Avatar, Position} from "evergreen-ui";

const UserProfilePopover = ({name}) => {
    const [selected, setSelected] = useState(null)
    return (
        <SelectMenu
            position={Position.BOTTOM}
            hasTitle={false}
            hasFilter={false}
            height={160}
            width={180}
            height={140}
            width={180}
            title="User Profile Actions"
            options={
                ['My Profile', 'Orders', 'Coupons', 'Gift Cards']
                    .map(label => ({ label, value: label }))
            }
            selected={selected}
            onSelect={item => setSelected
            ({ selected: item.value })}
        >
            <Avatar name={name} size={32} marginRight={16} marginLeft={10}/>
        </SelectMenu>
    )
}

export default  UserProfilePopover;