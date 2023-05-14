function Header() {

    return (
        <>
            <header>
                <nav class="header_navigation">
                    <a class="header_icon" href="">
                        <img src="src\assets\logo.png" alt="HighJunk"></img>
                    </a> 
                    <div class="header_menu-button js-menu-button mod-sp">
                        <span class="top"></span>
                        <span class="middle"></span>
                        <span class="bottom"></span>
                    </div>
                    <ul class="header_navigation-menu-list">
                        <li>
                            <a class="header_navigation-menu-link parts" hraf="">
                                ABOUT<ruby>私たちの強み</ruby>
                            </a>
                        </li>
                        <li class="header_navigation-menu-link">
                            <span class="js=parent-link">
                                BUSINESS<ruby>ビジネス</ruby>
                            </span>
                            <ul class="smartphone" style="display: none;">
                                <li><a class="parts" href="">Web&amp;APP<ruby>ウェブ&amp;アプリ開発</ruby></a></li>
                                <li><a class="parts" href="">GAME<ruby>ゲーム開発</ruby></a></li>
                                <li><a class="parts" href="">EC<ruby>EC開発</ruby></a></li>
                                <li><a class="parts" href=""> UI/UX<ruby>UI/UX開発</ruby></a></li>
                            </ul>
                            <ul class="pc">
                                <li><a class="parts" href="">Web&amp;APP<ruby>ウェブ&amp;アプリ開発</ruby></a></li>
                                <li><a class="parts" href="">GAME<ruby>ゲーム開発</ruby></a></li>
                                <li><a class="parts" href="">EC<ruby>EC開発</ruby></a></li>
                                <li><a class="parts" href=""> UI/UX<ruby>UI/UX開発</ruby></a></li>
                            </ul>
                        </li>
                    </ul> 
                </nav>
            </header>
        </>
    )
}