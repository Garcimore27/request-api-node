import './styles.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
            <header className="header">
                <div>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="#">A propos</NavLink>
                </div>
            </header>
    );
}