import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <header>
                <h2>Matheus Benevides</h2>
            </header>

            <div className="nav-links">
                <a href="#sobre">Sobre-mim</a>
                <a href="#trajetoria">Minha trajetória</a>
                <a href="#projetos">Projetos</a>
                <a href="#skills">Skills</a>
                <a href="#contatos">Contatos</a>
            </div>

            <button
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? '✕' : '☰'}
            </button>

            {menuOpen && (
                <div className="mobile-menu">
                    <a href="#sobre">Sobre-mim</a>
                    <a href="#trajetoria">Minha trajetória</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#skills">Skills</a>
                    <a href="#contatos">Contatos</a>
                </div>
            )}
        </nav>
    );
}