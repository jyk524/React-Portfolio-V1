import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>James Kim</h2>
                        <img
                        src="https://i.ibb.co/9Ysm9bM/profile-circle.png"
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}></p>
                        </Cell>
                    <Cell col={6}> 
                        <h2>Contact Me</h2>
                        <hr/>
                            <div className>

                            </div>
                            <ul className="demo-list-icon mdl-list">
                            <li className="mdl-list__item">
                                <span className="mdl-list__item-primary-content">
                                <i className="material-icons mdl-list__item-icon">person</i>
                                Phone
                            </span>
                            </li>
                            <li className="mdl-list__item">
                                <span className="mdl-list__item-primary-content">
                                <i className="material-icons mdl-list__item-icon">person</i>
                                Email
                            </span>
                            </li>
                            <li className="mdl-list__item">
                                <span className="mdl-list__item-primary-content">
                                <i className="material-icons mdl-list__item-icon">person</i>
                                Github
                            </span>
                            </li>
                            </ul>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;