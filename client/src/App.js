import React from 'react';
import Layout from './core/Layout';

const App = () => {
    return (
        <Layout>
            <div className="col-md-6 offset-md-3 text-center">
                <h1 className="p-5">M.E.R.N Authentication</h1>
                <hr />
                <div>
                    <h2 className="p-5"> Welcome to SolarEdge Monitor!</h2>
                    <p class= "content">
                       "content ..."
                    </p>
                </div>
                <hr />
                <footer class="footer2" id="footerRights">
                    <div class="container">
                        <div class="row">
                            <div class="span12" align="center">
                                <p>Copyright © 2020 by the <a class="inversedlink" href="">PNG</a> Created</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Layout>
    );
};

export default App;
