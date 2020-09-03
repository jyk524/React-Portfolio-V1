import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                {/* Creating a grid with React MDL similar to columns in bootstrap */}
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/*  Avatar/Profile Picture */}
                        <img
                        src="https://i.imgur.com/6jIo4el.jpg"
                        alt="avatar"
                        className="avatar-img"
                        />
                        {/* Banner */}
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                        <hr/>

                        <p>HTML/CSS | Bootstrap | JavaScript | jQuery | NodeJS | Express | MySQL | MongoDB | MERN Stack</p>
                        
                        <div className="social-links">
                            {/* Github */}
                            <a href="https://github.com/jyk524" rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-github-square"  aria-hidden="true" />
                            </a>
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/james-kim-2340a261/" rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-linkedin-square"  aria-hidden="true" />
                            </a>
                            {/* Github */}
                            <a href="https://youtube.com/jyk524" rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-youtube-square"  aria-hidden="true"/>
                            </a>

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;