import React from 'react';
import Layout from "../../components/Layout/Layout";
import LoginContainer, {LoginButtonContainer} from './styles'
import {TextInputField, Pane} from "evergreen-ui";
import AppButton from "../../components/Common/Button";

const Login = props => {
    return (
        <Layout showCarousel={false}>
            <LoginContainer>
                <Pane
                    elevation={3}
                    hoverElevation={4}
                    float="left"
                    width={500}
                    height={300}
                    margin={24}
                    display="flex"
                    justifyContent="center"
                    paddingX={40}
                    flexDirection="column"

                >
                    <TextInputField
                        label="User Name/ Email ID"
                        placeholder="Please enter your user name"
                        spellCheck={false}
                    />
                    <TextInputField
                        label="Password"
                        placeholder="Please enter your password"
                        spellCheck={false}
                        type="password"
                    />
                    <LoginButtonContainer>
                        <AppButton title={"Sign in"} iconRequired={false} style={{width: 'max-content'}}/>
                    </LoginButtonContainer>
                </Pane>
            </LoginContainer>
        </Layout>
    )
}

export default Login