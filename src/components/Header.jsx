import { AppBar, Container, Toolbar } from "@mui/material";
import pokedexLogo from '../assets/PokedexLogo.png'
import './Header.css'

export default function Header() {
  return (
    <Container>
        <div className="pokedex-navbar">
            <AppBar position="static">
                <Toolbar>
                    <div className="image-container">
                        <img src={pokedexLogo} alt="Pokédex Logo" />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    </Container>
  )
}
