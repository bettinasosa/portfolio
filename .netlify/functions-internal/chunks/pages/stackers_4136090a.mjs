/* empty css                         */import { d as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro_d3200be8.mjs';
import 'clsx';
import { a as $$MarkDownProjectLayout } from './m31_05ef5236.mjs';
import 'html-escaper';
import './404_82dd810c.mjs';
/* empty css                           *//* empty css                         *//* empty css                          */import './gallery_629c928a.mjs';
import 'react/jsx-runtime';
import 'react';
import 'swiper/react';
/* empty css                             */import 'swiper/modules';
import 'vanilla-tilt';

const html = "";

				const frontmatter = {"layout":"../../layouts/MarkDownProjectLayout.astro","title":"StackeRs","subtitle":"Sustainable packaging","description":"Sustainable solutions for the lifecycle of baby care products","author":"Bettina Sosa","isImage":"false","image":"https://www.youtube.com/embed/Dz2JouO5LuI?autoplay=1&controls=0&rel=0&loop=1&modestbranding","slides":["/assets/bottles/stack1.png","/assets/bottles/stack2.png","/assets/bottles/stack3.png","/assets/bottles/stack4.png","/assets/bottles/stack5.png"],"tags":["design","software","electronics"],"introduction":"Single-use plastics are a major environmental problem, and baby care packaging is a major culprit.  Most plastics take hundreds of years to decompose, even though they are only used for a few minutes, days, or weeks. While plastic recycling programs exist, they often do not accept mixed-material packaging, which is commonly used in baby care products.","myRole":"","paragraphs":[]};
				const file = "/Users/bettinasosa/portfolio/src/pages/projects/stackers.md";
				const url = "/projects/stackers";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkDownProjectLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
