import React from 'react';

export function Search({
    handleSubmit
}) {

    return(
        <>
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <input name="cityName" placeholder="Cherchez la température de..." />
                    <button name="submit" type="submit">Rechercher</button>
                </form>
            </div>
        </>
    )
}