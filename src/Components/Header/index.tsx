import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
    let url = useLocation();
    const [burger, setBurger] = useState<boolean>(false);
    const navList = useRef<null | HTMLElement>(null);
    const elBurger = useRef<null | HTMLDivElement>(null);
    const root = document.getElementById("root");
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.screen.width >= 570) {
                if (root) {
                    root.style.height = "unset";
                    root.style.overflow = "unset";
                }
                elBurger.current?.classList.remove("-active");
                navList.current?.classList.remove("-active");
                setBurger(false);
            }
        });
        return () => {
            window.removeEventListener("resize", () => {});
        };
    });

    const activeBurger = (arr: number) => {
        if (root) {
            if (arr !== 1) {
                if (!burger) {
                    root.style.height = "100vh";
                    root.style.overflow = "hidden";
                    elBurger.current?.classList.add("-active");
                    navList.current?.classList.add("-active");
                    setBurger(true);
                } else {
                    root.style.height = "unset";
                    root.style.overflow = "unset";
                    elBurger.current?.classList.remove("-active");
                    navList.current?.classList.remove("-active");
                    setBurger(false);
                }
            } else {
                root.style.height = "unset";
                root.style.overflow = "unset";
                elBurger.current?.classList.remove("-active");
                navList.current?.classList.remove("-active");
                setBurger(false);
            }
        } else console.error("Не найден root");
    };
    return (
        <article className="header">
            <header className="header__container">
                <Link to={"/"}>
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
                        onClick={() => activeBurger(1)}
                    >
                        Main
                    </Link>
                    <Link
                        to={"/skills"}
                        className={
                            "header__link" +
                            (url.pathname === "/skills" ? " -active" : "")
                        }
                        onClick={() => activeBurger(2)}
                    >
                        Skills
                    </Link>
                    <Link
                        to={"/contacts"}
                        className={
                            "header__link" +
                            (url.pathname === "/contacts" ? " -active" : "")
                        }
                        onClick={() => activeBurger(3)}
                    >
                        Contacts
                    </Link>
                </nav>
                <div
                    className="header__burger"
                    ref={elBurger}
                    onClick={() => activeBurger(0)}
                >
                    <span></span>
                </div>
            </header>
        </article>
    );
};

export default Header;
