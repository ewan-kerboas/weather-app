import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '../../components'

export function Home() {

    const navigate = useNavigate();

    const [city, setCity] = React.useState("");

    const handleSubmit = React.useCallback(
        async event => {
            event.preventDefault();

            const {cityName} = event.target.elements;

            try {   
                setCity(cityName.value)
            } catch(error) {
                alert(error)
            }
        }
    )

    if(city != "") {
        navigate(`city=${city}`);
    }

    return(
        <>
            <section id="home">
                <div className="shadow"></div>
                <div className="content">
                    <Search handleSubmit={handleSubmit} />
                </div>
            </section>
        </>
    )
}