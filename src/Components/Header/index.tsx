import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
    let url = useLocation();
    const [burger, setBurger] = useState<boolean>(false);
    const navList = useRef<null | HTMLElement>(null);
    const elBurger = useRef<null | HTMLDivElement>(null);
    const root = document.getElementById("root");
    const checkWindowSize = () => {
        if (window.screen.width >= 570) {
            console.log("больше 570");
            if (root) {
                root.style.position = "unset";
            }
            elBurger.current?.classList.remove("-active");
            navList.current?.classList.remove("-active");
            setBurger(false);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", () => {
            checkWindowSize();
        });
        return () => {
            window.removeEventListener("resize", () => {});
        };
    });

    const unFreeze = () => {
        if (root) {
            root.style.position = "unset";
        } else {
            console.log("Root не найден");
        }
    };

    const activeBurger = (arr: number) => {
        if (root) {
            if (arr !== 0) {
                if (!burger) {
                    root.style.position = "fixed";
                    elBurger.current?.classList.add("-active");
                    navList.current?.classList.add("-active");
                    setBurger(true);
                    checkWindowSize();
                } else {
                    root.style.position = "unset";
                    elBurger.current?.classList.remove("-active");
                    navList.current?.classList.remove("-active");
                    setBurger(false);
                }
                checkWindowSize();
            } else {
                root.style.position = "unset";
                elBurger.current?.classList.remove("-active");
                navList.current?.classList.remove("-active");
                setBurger(false);
            }
        } else console.error("Не найден root");
    };
    return (
        <article className="header">
            <header className="header__container">
                <Link to={"/"} onClick={() => unFreeze()}>
                    <h2 className="header__logo">
                        <span>Kirich_2k</span> portfolio
                    </h2>
                </Link>
                <nav className="header__nav" ref={navList}>
                    <Link
                        to={"/"}
                        className={
                            "header__link" +
                            (url.pathname === "/" ? " -active" : "")
                        }
                        onClick={() => activeBurger(0)}
                    >
                        Main
                    </Link>
                    <Link
                        to={"/skills"}
                        className={
                            "header__link" +
                            (url.pathname === "/skills" ? " -active" : "")
                        }
                        onClick={() => activeBurger(1)}
                    >
                        Skills
                    </Link>
                    <Link
                        to={"/contacts"}
                        className={
                            "header__link" +
                            (url.pathname === "/contacts" ? " -active" : "")
                        }
                        onClick={() => activeBurger(2)}
                    >
                        Contacts
                    </Link>
                </nav>
                <div
                    className="header__burger"
                    ref={elBurger}
                    onClick={() => activeBurger(3)}
                >
                    <span></span>
                </div>
            </header>
        </article>
    );
};

export default Header;
