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
        <main>

            {/* Cards section */}
            <section>
                <div className="container">
                    {/* Row */}
                    <div className="row">
                    
                    {/* Card */}
                    <div class="card col-12 col-sm-6 col-md-4 col-lg-3" style={{width:'18rem'}}>
                         <h5 class="card-title">Lino Banfi</h5>
                          <h6 class="card-subtitle mb-2 text-muted ">Nato il data, Nazionalità</h6>
                        <img className="card-img-top" src="https://cloud.rtl.it/RTLFM/News/Article/1000x1000/lino-banfi-a-rtl-1025-spesso-i-politici-mi-imitano-qfzs9.jpg" alt="Lino" />
                        <div class="card-body">
                            <p class="card-text">Descrizione
                                <span>Premi:</span>
                            </p>
                            
                        </div>
                    </div>
                    

                    

                    

                    </div>

                </div>

            </section>
        </main>
    )
}