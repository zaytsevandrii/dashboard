import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "scenes/dashboard"
import Layout from "scenes/layout"
import { themeSettings } from "theme"

function App() {
    const mode = useSelector((state) => state.global.mode)
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
    return (
        <div className="App">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Layout>
                    <Routes>
                        
                            {/*    <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
                            <Route path="/dashboard" element={<Dashboard />} />
                    </Routes></Layout>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    )
}

export default App
