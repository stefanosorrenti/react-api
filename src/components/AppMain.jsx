//IMPORT
import { useEffect } from "react"
import { useState } from "react"
export default function AppMain() {

    //DATA

    //API
    const maleActorsApi = 'https://lanciweb.github.io/demo/api/actors/' //Salvo il mio endpoint in una variabile
    const famaleActorsApi = 'https://lanciweb.github.io/demo/api/actresses/' //Salvo il mio endpoint in una variabile
    const [maleActorsList, setMaleActorsList] = useState([]) //Creo una variabile di stato per rendere dinamici e salvare esternamente i dati della mia API
    const [femaleActorsList, setFemaleActorsList] = useState ([]) //Creo una variabile di stato per rendere dinamici e salvare esternamente i dati della mia API

    //useEffects

    useEffect(()=>{ //Uso use effect per effeuare una chiamata HTTP all'avvio della pagaina

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
        <main>
            PROVA MAIN
        </main>
    )
}