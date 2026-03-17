//IMPORT
import { useEffect } from "react"
import { useState } from "react"
export default function AppMain() {

    //DATA

    //API
    const maleActorsApi = 'https://lanciweb.github.io/demo/api/actors/' //Salvo il mio endpoint in una variabile
    const famaleActorsApi = 'https://lanciweb.github.io/demo/api/actresses/' //Salvo il mio endpoint in una variabile
    const [maleActorsList, setMaleActorsList] = useState([]) //Creo una variabile di stato per rendere dinamici e salvare esternamente i dati della mia API
    const [femaleActorsList, setFemaleActorsList] = useState([]) //Creo una variabile di stato per rendere dinamici e salvare esternamente i dati della mia API

    //useEffects

    useEffect(() => { //Uso use effect per effeuare una chiamata HTTP all'avvio della pagaina

        fetch(maleActorsApi) //Effettuo la chiamata

            .then(data => data.json()) //Effetuo il parsing dei dati

            .then(maleActors => { //Utilizzo i dati.
                //console.log('Lista attori:');
                //console.log(maleActors);
                setMaleActorsList(maleActors);


            })

    }, [])

    //FACCIO LO STESSO ESATTO PROCEDIMENTO MA CON L'API DELLE ATTRICI

    useEffect(() => {
        fetch(famaleActorsApi)

            .then(data => data.json())

            .then(femaleActors => {
                //console.log('Lista attrici');
                //console.log(femaleActors);
                setFemaleActorsList(femaleActors);


            })
    }, [])



    return (
        /* Main */
        <main className="mt-5">

            {/* Cards section */}
            <section>
                <div className="container">
                    {/* Row */}
                    <div className="row justify-content-evenly row-gap-4">

                        {maleActorsList.map((actor) => (  //Utilizzo il map per ciclare la mia varaibile di stato e renderizzo il markup in

                            /* Cards/Row */
                            <div className="card col-12 col-sm-6 col-md-4 col-lg-3 card-bgc" style={{ width: '18rem' }}>

                                {/* Card title */}
                                <h5 className="card-title mt-2 text-black">{actor.name}</h5>
                                <h6 className="card-subtitle mb-2 text-secondary">Born in {actor.birth_year}, {actor.nationality}.</h6>

                                {/* img Card Container */}
                                <div className="img-box">
                                     <img className="card-img-top rounded" src={actor.image} alt={`Image of ${actor.name}`} /> 
                                </div>

                                {/* Card Body */}
                                <div className="card-body">
                                    <p className="card-text rounded"> {actor.biography}<br /><span>Premi: {actor.awards}</span></p>
                                </div>

                            </div>
                        ))}

                        






                    </div>

                </div>

            </section>
        </main>
    )
}