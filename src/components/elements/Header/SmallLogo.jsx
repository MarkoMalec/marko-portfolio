import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
	start: {
		fill: 'rgba(255, 255, 255, 0)',
		pathLength: 0 
	},
	end: { 
		fill: 'rgba(255, 255, 255, 0)',
		pathLength: 1,
		transition: {
			duration: 4,
			ease: "easeInOut"
		}
	 }
}

const SmallLogo = ({ isShrunk }) => {
	return (
		<motion.svg viewBox="0 0 111.87 130.13" xmlns="http://www.w3.org/2000/svg">
	<g id="Layer_2" data-name="Layer 2">
		<g id="crtez">
			<path variants={svgVariants} initial="start" animate="end" style={{"fill":isShrunk ? "#fff" : "none","stroke":"none" }} d="M55.94,12.64v0h-.22L10.38,38.56v53l45.56,26.17L101.5,91.56v-53L56,12.6ZM.38,32.73,55.94.65,111.5,32.73V97.45l-55.56,32L.38,97.45Z"/>
			<path variants={svgVariants} initial="start" animate="end" style={{"fill":isShrunk ? "#fff" :"none","stroke":"none" }} d="M98.36 40.51 98.36 89.51 84.47 97.2 84.47 59.4 79.39 66.59 71.44 55.62 71.44 105.4 55.94 114.31 55.94 16.4 70.22 24.79 79.42 38.54 84.92 32.63 98.36 40.51"/>
			<motion.path variants={svgVariants} initial="start" animate="end" style={{"fill":"none","stroke":"#fff","strokeMiterlimit":"10","strokeWidth":"0.75px"}} d="M55.94 0.65 0.38 32.73 0.38 97.45 55.94 129.48"/>
			<motion.path variants={svgVariants} initial="start" animate="end" style={{"fill":"none","stroke":"#fff","strokeMiterlimit":"10","strokeWidth":"0.75px"}} d="M55.72 12.68 10.38 38.56 10.38 91.56 55.94 117.73"/>
			<motion.path variants={svgVariants} initial="start" animate="end" style={{"fill":"none","stroke":"#fff","strokeMiterlimit":"10","strokeWidth":"1.5px"}} d="M55.94 16.4 41.65 24.79 32.45 38.54 26.95 32.63 13.52 40.51 13.52 89.51 27.39 97.2 27.39 59.4 32.48 66.59 40.42 55.62 40.42 105.4 55.94 114.31"/>
			<motion.path variants={svgVariants} initial="start" animate="end" style={{"fill":"none","stroke":"#fff","strokeMiterlimit":"10","strokeWidth":"0.75px"}} d="M55.94 118.02 55.94 117.73 55.94 116.87"/>
			<motion.path variants={svgVariants} initial="start" animate="end" style={{"fill":"none","stroke":"#fff","strokeMiterlimit":"10","strokeWidth":"0.75px"}} d="M55.94 1.02 55.94 0.65 111.5 32.73 111.5 97.45 55.94 129.48 55.94 129.12"/>
			<motion.path variants={svgVariants} initial="start" animate="end" style={{"fill":"none","stroke":"#fff","strokeMiterlimit":"10","strokeWidth":"0.75px"}} d="M55.94 13.05 55.94 12.68 55.94 12.64"/>
			<motion.path variants={svgVariants} initial="start" animate="end" style={{"fill":"none","stroke":"#fff","strokeMiterlimit":"10","strokeWidth":"0.75px"}} d="M55.94 114.67 55.94 114.31 55.94 16.4 55.94 16"/>
			<motion.path variants={svgVariants} initial="start" animate="end" style={{"fill":"none","stroke":"#fff","strokeMiterlimit":"10","strokeWidth":"0.75px"}} d="M56.01 12.6 101.5 38.56 101.5 91.56 55.94 117.73"/>
			<motion.path variants={svgVariants} initial="start" animate="end" style={{"fill":"none","stroke":"#fff","strokeMiterlimit":"10","strokeWidth":"1.5px"}} d="M55.94 16.4 70.22 24.79 79.42 38.54 84.92 32.63 98.36 40.51 98.36 89.51 84.47 97.2 84.47 59.4 79.39 66.59 71.44 55.62 71.44 105.4 55.94 114.31"/>
		</g>
	</g>
</motion.svg>
	)
}

export default SmallLogo
