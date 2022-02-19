import React from 'react';
import './home.css';

export function Home() {

    const [city, setCity] = React.useState("");

    return(
        <>
            <section id="home">
                <div className="shadow"></div>
                <div className="content">
                    <div className="card">
                        <h1>Bienvenue sur votre Météo préférée :)</h1>
                        <form>
                            <input placeholder="Nom d'une ville" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}