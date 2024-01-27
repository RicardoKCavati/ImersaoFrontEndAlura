import React from "react";
import './Header.css';

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src="./src/assets/icons/small-left.png" alt="Seta para a esquerda" />
                </button>
                <button className="arrow-right">
                    <img src="./src/assets/icons/small-right.png" alt="Seta para a direita" />
                </button>
            </div>
            <div className="header__search">
                <img src="./src/assets/icons/search.png" />
                <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?" />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
};
