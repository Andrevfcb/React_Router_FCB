import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <label htmlFor="">Podaj login<input style={{marginLeft: 5}} type="text" /></label>
            <label style={{marginLeft: 20}}htmlFor="">Podaj hasło<input style={{marginLeft: 5}} type="password" /></label>
            <button style={{marginLeft: 20}}>Zaloguj</button>
        </div>
    );
}

export default LoginPage;