import './Header.css'
import './Base.css'
import './Main.css'
import contactLogo from'./assets/contact-logo.svg'
import headerLogo from './assets/logo_black.png'

export default function Header() {

    return (
        <>
            <header id="header-h" class="header">
                <nav class="header__navigation">
                    <a class="header_icon" href="./home.html">
                        <img src={headerLogo} alt="HighJunk"></img>
                    </a> 
                    <div class="hamburger">
                        <span class="top"></span>
                        <span class="middle"></span>
                        <span class="bottom"></span>
                    </div>
                    <ul class="header__navigation-menu-list">
                        <li class="header__navigation-menu-link">
                            <a class="no-barba" hraf="">
                                ABOUT<ruby>私たちの強み</ruby>
                            </a>
                        </li>
                        <li class="header__navigation-menu-link">
                            <span class="js=parent-link">
                                BUSINESS<ruby>ビジネス</ruby>
                            </span>
                        </li>
                        <li class="header__navigation-menu-link">
                            <a class="no-barba" hraf="">
                                PRODUCT<ruby>プロダクト</ruby>
                            </a>
                        </li>
                        <li class="header__navigation-menu-link">
                            <a class="no-barba" hraf="">
                                WORKS<ruby>実績</ruby>
                            </a>
                        </li>
                        <li class="header__navigation-menu-link">
                            <span class="js=parent-link">
                                COMPANY<ruby>企業情報</ruby>
                            </span>
                        </li>
                        <li class="header__navigation-menu-link">
                            <a class="no-barba" hraf="">
                                RECRUIT<ruby>リクルート</ruby>
                            </a>
                        </li>
                        <li class="header__navigation-menu-link">
                            <a class="no-barba" hraf="">
                                <img src={contactLogo} alt="contact-logo"></img>
                                <ruby>お問い合わせ</ruby>
                            </a>
                        </li>
                    </ul> 
                </nav>
            </header>
        </>
    )
}