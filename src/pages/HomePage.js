import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria?',
        autor: 'Ala Basia',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officia. Ab autem dicta exercitationem laborum, consectetur cum porro neque veniam eum molestiae eos, distinctio facere, ipsa officia obcaecati tempore quo?"
    },
    {
        id: 2,
        title: 'Czym jest paradoks?',
        autor: 'Ala Zos',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officia. Ab autem dicta exercitationem laborum, consectetur cum porro neque veniam eum molestiae eos, distinctio facere, ipsa officia obcaecati tempore quo?"
    },
    {
        id: 3,
        title: 'Czym jest materia?',
        autor: 'Ala Gos',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officia. Ab autem dicta exercitationem laborum, consectetur cum porro neque veniam eum molestiae eos, distinctio facere, ipsa officia obcaecati tempore quo?"
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
        // w nawiasie article przekazujemy jako propsy do komponentu, który tworzymy
    ))

    return ( <div className='home'>{artList}</div> );
}

export default HomePage;