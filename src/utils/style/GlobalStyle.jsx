import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

button {
  border: none;
  background: none;
}

li{
  list-style-type: none;
}
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle