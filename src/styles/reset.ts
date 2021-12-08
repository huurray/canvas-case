import { css } from "@emotion/react";

const reset = css`
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

	html, body {
		width: 100%;
		height: 100%;
		font-size: 10px;
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
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
	}
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
		overflow: hidden;
	}
	button, input {
		outline: none;
		border: none;
		background-color: unset;
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
	a {
		color: unset;
		text-decoration: none; 
		outline: none;
	}
	#root {
		width: 100%;
		height: 100%;
	}
	@media all and (max-width: 750px) {
		html { font-size: 6px; }
		* {
			-webkit-overflow-scrolling: touch;
			::-webkit-scrollbar {
				display: none;
			}
			-ms-overflow-style: -ms-autohiding-scrollbar;
			-ms-overflow-style: none;
		}
	}
	* {
	 	/* scrollbar styling */
		scrollbar-color: unset;
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: unset; 
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 7px;
      background-color: #333;
    }
	}
`;

export default reset;
