import React, { Component } from "react";
import '../Style/Navigation.css';
// export default class Navigation extends Component {
export default function Navigation() {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#new">New</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )

}