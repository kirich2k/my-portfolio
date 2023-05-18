import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./Contacts.css";

function Contacts() {
    return (
        <>
            <Header />
            <main className="main" id="contacts">
                <article className="main__container contacts">
                    <span className="contacts__title">Contacts</span>
                    <article className="contacts__front location">
                        <span className="location__title">Location</span>
                        <p className="location__description">
                            Simferopol, Russia
                        </p>
                    </article>
                    <article className="contacts__back telegram">
                        <span className="telegram__title">Telegram</span>
                        <a
                            className="telegram__description"
                            href="https://t.me/Kirich_982"
                            target='_blank'
                            rel="noreferrer"
                        >
                            @Kirich_982
                        </a>
                    </article>
                    <article className="contacts__back VK">
                        <span className="VK__title">VK</span>
                        <a
                            className="VK__description"
                            href="https://vk.com/kirich_982"
                            target='_blank'
                            rel="noreferrer"
                        >
                            vk.com/Kirich_982
                        </a>
                    </article>
                    <article className="contacts__back mail">
                        <span className="mail__title">Email</span>
                        <a
                            href="mailto:Faersan2014@mail.ru"
                            className="mail__description"
                        >
                            Faersan2014@mail.ru
                        </a>
                    </article>
                </article>
            </main>
            <Footer />
        </>
    );
}

export default Contacts;
