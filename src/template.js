import { BBcodeTemplate } from "@thoughtsunificator/bbcode-parser-template"

class Template extends BBcodeTemplate {

	/**
	 * @abstract
	 * @param {string} input
	 * @returns {string}
	 */
	toHTML(input) {
		return super.toHTML(input)
	}

	/**
	 * @abstract
	 * @param {string} input
	 * @returns {string}
	 */
	toRaw(input) {
		return super.toBBCode(input)
	}

}

export default Template
