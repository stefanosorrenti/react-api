import { useEffect } from "react"
import { useState } from "react"
export default function AppMain() {

    //DATA

    //API
    const maleActorsApi = 'https://lanciweb.github.io/demo/api/actors/' //Salvo il mio endpoint in una variabile
    const famaleActorsApi = 'https://lanciweb.github.io/demo/api/actresses/' //Salvo il mio endpoint in una variabile

    //USESTATES
    const [render, setRender] = useState([]) //Variabile che renderizerrà i miei dati nella UI.
    const [maleActorsList, setMaleActorsList] = useState([]) //Creo una variabile di stato per rendere dinamici e salvare esternamente i dati della mia API
    const [femaleActorsList, setFemaleActorsList] = useState([]) //Creo una variabile di stato per rendere dinamici e salvare esternamente i dati della mia API
    const [completeList, setCompleteList] = useState([]) //Variabile che conterà l'intera lista.
    const [title, setTitle] = useState('')
    


    //USEEFFECTS

    useEffect(() => { //Uso use effect per effeuare una chiamata HTTP all'avvio della pagaina

        fetch(maleActorsApi) //Effettuo la chiamata

            .then(data => data.json()) //Effetuo il parsing dei dati

            .then(maleActors => { //Utilizzo i dati.
                //console.log('Lista attori:');
                //console.log(maleActors);
                setMaleActorsList(maleActors); //Setto la mia variabile di stato con i dati delle mia API

                console.log('Ho settato gli attori maschi al caricamento');



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

                console.log('Ho settato le attrci al caricamento'); //Setto la mia variabile di stato con i dati delle mia API




            })
    }, [])

    useEffect(() => { //Use effect che agisce quando una della mia variabili di stato riceve dei cambiamenti

        setCompleteList([...maleActorsList, ...femaleActorsList])  //Salvo in una variabile di stato il nuovo array con tutte e due le mie variabili di stato precedentemente aggiornate.
        setRender(completeList) //Imposto la variabile che renderizza gli elementi in pagina uguale alla variabile appena creata.
        setTitle('All')
        console.log('Ho settato la lista di attori completi');

    }, [maleActorsList, femaleActorsList])

    
    return (
        /* Main */
        <main>

            {/* Nav bar */}
            <ul class="nav justify-content-center p-3 bg-dark-subtle">
                <li class="nav-item">
                    <button className="nav-link" onClick={() => {setRender(completeList); setTitle('All')}} aria-current="page">All</button>
                </li>
                <li class="nav-item">
                    <button className="nav-link" onClick={() =>{ setRender(maleActorsList); setTitle('Mans')}}>Mans</button>
                </li>
                <li class="nav-item">
                    <button className="nav-link" onClick={() => {setRender(femaleActorsList); setTitle('Womans')}}>Womans</button>
                </li>

            </ul>

                
                
                
                {/* Cards section */}
                <section className="mt-5">
                    <h2 className="text-white text-center fs-1 my-5">{title.toUpperCase()}</h2>
                    <div className="container">
                        {/* Row */}
                        <div className="row justify-content-evenly row-gap-4">

                            {render.sort((a, b) => a.name.localeCompare(b.name)).map((actor, index) => (  //Utilizzo il map per ciclare la mia varaibile di stato e renderizzo il markup in

                                
                                /* Cards/Row */
                                <div key={index} className="card col-12 col-sm-6 col-md-4 col-lg-3 card-bgc" style={{ width: '18rem' }}>

                                    {/* Card title */}
                                    <h5 className="card-title mt-2 text-black">{actor.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-secondary">Born in {actor.birth_year}, {actor.nationality}.</h6>

                                    {/* img Card Container */}
                                    <div className="img-box">
                                        <img className="card-img-top rounded" src={actor.image} alt={`Image of ${actor.name}`} />
                                    </div>

                                    {/* Card Body */}
                                    <div className="card-body">
                                        <p className="card-text rounded"> 
                                            {actor.biography}<br />
                                            <span className=" d-block my-2">Premi: {actor.awards}</span>
                                            </p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>
        </main>
    )
}