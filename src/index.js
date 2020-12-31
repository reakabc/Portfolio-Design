import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom'
import styled, {ThemeProvider} from 'styled-components'

import theme from './theme/theme'
import GlobalStyle from './theme/GlobalStyle'
import SplashScreen from './components/SplashScreen'
const App = lazy(()=>import('./App'))
const root = document.getElementById("root");

const ParentLayout = styled.div`
background: url('./assets/rain.jpg');
`

ReactDOM.render(
<ThemeProvider theme={theme}>
<GlobalStyle/>
<ParentLayout>
    <Suspense fallback={<SplashScreen></SplashScreen>}>
        <App />
    </Suspense>
</ParentLayout>
</ThemeProvider>
, root);