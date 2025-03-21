import React from "react";
import "../css/Footer.css";
import { FaHeart } from "react-icons/fa";

function Footer() {
    return (
        <>
            <section id="footer">
                <div className="footer">
                    <h4>
                        Developed with
                        <i>
                            <FaHeart />
                        </i>
                        by
                        <a href="https://velibor.in/">Velibor Krivokuća</a>
                    </h4>
                </div>
            </section>
        </>
    );
}

export default Footer;
