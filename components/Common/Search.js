import styled from 'styled-components'
import {SearchInput} from "evergreen-ui";

export default styled(SearchInput)`
  border: 1px solid ${props => props.theme.themeColor}
  :hover {
    width: 250px
  }
`
