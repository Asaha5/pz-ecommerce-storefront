import styled from 'styled-components'
import {Image} from 'react-datocms'

const AppImage = styled(Image)`
  height: ${props => props.height ? props.height : "380px"}
  width: ${props => props.width ? props.width : "100%"}
`

export default AppImage