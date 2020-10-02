import React from 'react';
import Article from '../Article';

const articles = [
    {
        id: 1,
        title: "Historii klubu",
        text: "W dziale poświęconym historii możesz dowiedzieć się jak wyglądały początki wielkiej FC Barcelony."
    },
    {
        id: 2,
        title: "Kadrze klubu",
        text: "W tym dziale możesz zapoznać się z aktualną kadrą Dumy Katalonii oraz przeczytać różne informacje na temat każdego zawodnika."
    },
    {
        id: 3,
        title: "Sukcesach klubu",
        text: "Jeśli ciekawi cię ile oraz jakie tytuły zdobyła FC Barcelona, zajrzyj do sekcji poświęconej sukcesom klubu."
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            <h1>
            <p>Witaj na stronie poświęconej klubowi piłkarskiemu FC Barcelona!</p></h1>
            <br></br>
            <p>Tutaj możesz dowiedzieć się o:</p>
            {artList}
        </div>
    );
}

export default HomePage;