import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h2 className='text-center'>welcome to world</h2>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Link to="/SignUppage">SignUppage</Link>
                        <br />
                        <Link to="/LoginPage">LoginPage</Link>
                    </div>
                    <div className="col-6">
                        <ul>

                        <li>
                            <Link to="/RegisterPage">RegisterPage</Link>
                        </li>
                        <li>
                        <Link to="/ApiWithLogin">ApiWithLogin</Link>

                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;