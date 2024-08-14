import React from 'react';
import {useState} from 'react';

const ReadMore = () => {

    const [readMore , setReadMore] = useState(false);
    setReadMore("short-text");

    return(
      <>
        <p className={readMore}>
        Le pays des hommes intègres est un pays dont l’héritage culturel est très riche grâce aux 60 ethnies différentes 
        qu’il y vivent ensemble. Le maintien des traditions et de l’harmonie au 
        sein de ses différentes populations est essentiel à la consolidation et l’épanouissement de 
        la nation. Le succès du Burkina Faso n’est pas seulement dû à sa forte tradition d’intégration, 
        mais aussi à son innovation culturelle. Le Burkina Faso exporte sa propre culture, et accueille des 
        évènements régionaux et internationaux sur tout son territoire. Plusieurs festivals sont ainsi organisés 
        dont les plus importants sont : Le Festival panafricain du cinéma et de la télévision de Ouagadougou (FESPACO), 
        le plus grand festival de cinéma africain sur le continent a lieu tous les deux ans à Ouagadougou; Le Salon International 
        de l'Artisanat de Ouagadougou (SIAO), a lieu lui aussi tous les deux ans, principalement les années paires 
        (fin octobre - début novembre). C'est le plus grand salon de promotion de l'artisanat africain. 
        A lieu également tous les deux ans à Bobo-Dioulasso durant une semaine, la Semaine nationale de la
        culture (SNC). Le Faso Dan Fani (qui veut dire pagne tissé de la patrie en langue dioula) est l’un
          des tissus traditionnels très prisés tant à l’intérieur du pays qu’à l’extérieur. Il est fréquent
        de le voir porter dans les pays voisins. C’est la tenue officielle du Burkina Faso portée aussi b
          ien dans les cérémonies, au quotidien que par les élèves et étudiants sous forme d’uniformes scolaires.
        </p>
        <button type='button' onClick={() => setReadMore("long-text")}>Read more</button>
      </>

    )

}

export default ReadMore;