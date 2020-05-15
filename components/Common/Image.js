import styled from 'styled-components'

const Image = styled.img`
  height: ${props => props.height ? props.height : "380px"}
  width: ${props => props.width ? props.width : "480px"}
  border-radius: .1rem;
`

export default Image