import React from 'react';

const Article = ({ title, text }) => {

    const styles = {
        marginTop: 40,
        fontStyle: "italic"
    }

    return (
        <article style={styles}>
            <h3 style={{
                marginBottom: 3,
                textTransform: "uppercase"
            }}>{title}</h3>
            
            <p style={{ fontSize: 15}}>{text}</p>
        </article>
    );
}

export default Article
