import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    :root{
        --black: #000000;
        --white: #ffffff;
        --dark_purple: #422040;
        --pewter_blue: #9CAFB7;
        --spanish_carmine: #D11149;
        --safety_orange: #F17105;
        --jonquill: #E6C229;
        --raisin_black: #2E282A;
        --grenn_ryb: #76B041;
        --green_blue_crayoia:#2081C3;
        --metallic_seaweed: #028090;
        --star_wars_color:#04d5f1
    }

    *{
        box-sizing: border-box;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button, input {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        font-family: "Finlandica", sans-serif;
        vertical-align: baseline;
    }
    button:hover{
        cursor: pointer;
    }
    body{
        background-color:#F0FFF1;
        background-color: transparent;
        transition: background-color 1.2s ease;
    }
    body::-webkit-scrollbar {
    width: 4px;              
}

    body::-webkit-scrollbar-track {
    background: none;       
    }

    body::-webkit-scrollbar-thumb {
    background-color: var(--pewter_blue); 
    border-radius: 20px;
    }
`;
