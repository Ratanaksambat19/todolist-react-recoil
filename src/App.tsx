import React from 'react'
import {Input} from './components/Input'
import {Stats} from './components/Stats'
import {Tasks} from './components/Tasks'
import {ThemeProvider, GlobalStyles, Page} from './components/theme'
import {Header} from './components/Header'
import {useRecoilValue} from 'recoil'
import {nightModeState} from './recoil/toggleAtom'

const Home = () => {
    return (
        <Page>
            <Header />
            <Stats />
            <Tasks />
            <Input />
        </Page>
    )
}

const App = () => {
    const darkModeState = useRecoilValue(nightModeState)
    return (
        <ThemeProvider darkMode={darkModeState}>
            <GlobalStyles />
            <Home />
        </ThemeProvider>
    )
}

export default App
