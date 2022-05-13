import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

//=========VARIABLES COLORS==========
:root{
	--very-dark-purple: #191522;
	--light-green: #70B966;
	--yellow: #FFCC03;
}

//=========RESET ERIC MAYER==========

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

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
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
	text-decoration: none;
	color: #fff;
	font-weight: 300;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

//=========GLOBAL STYLES==========
* {
   
}

html{
    background-color: var(--very-dark-purple);
	width: 100%;
	height: 100%;
	font-family: 'Roboto', sans-serif;
}

body {
	max-width: 1440px;
	margin: 0 auto;
	color: #fff;
	padding: 0 5%;
}

`;
