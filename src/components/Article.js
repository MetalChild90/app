import React from 'react';

//destrukturyzacja w props
const Article = ({title, autor, text}) => {

    const styles = {
        marginTop: 40
        //nie potrzeba px
    }

    return (
        <article style={styles}>
            <h3 style={{marginBottom: 3, textTramsform: "uppercase"}}>{title}</h3>
            <span style={{marginBottom: 3, display: 'block', fontSize: 10}}>{autor}</span>
            <p style={{fontSize: 15}}>{text}</p>
        </article>
    )
}

export default Article;