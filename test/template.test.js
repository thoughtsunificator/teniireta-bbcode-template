import assert from "assert"

import { Template } from "../index.js"
import { Template as BBCodeTemplate } from "@thoughtsunificator/bbcode-parser-template"

describe("template", () => {

	it("instance", () => {
		assert.ok(Template.prototype instanceof BBCodeTemplate)
	})

})
