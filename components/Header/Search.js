import React, {useState} from 'react';
import {Autocomplete, Pane, SearchInput, IconButton} from "evergreen-ui";

const HeaderSearch = () => {
    return (
        <Autocomplete
            title="Search for products"
            onChange={changedItem => console.log(changedItem)}
            items={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']}
        >
            {({
                  key,
                  getInputProps,
                  getToggleButtonProps,
                  getRef,
                  inputValue,
                  openMenu,
                  toggleMenu
              }) => (
                <Pane
                    key={key}
                    innerRef={getRef}
                    display="flex"
                >
                    <SearchInput placeholder="Search for products" height={40} onChange={toggleMenu}/>
                </Pane>
            )}
        </Autocomplete>
    )
}

export default HeaderSearch;