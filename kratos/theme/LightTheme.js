import { BLACK, WHITE } from "../constant/color.js"
import Theme from "./Theme.js"
import { ROBOTO } from "../constant/fonts.js"

export class LightTheme extends Theme {
    constructor() {
        super(WHITE, BLACK, BLACK, ROBOTO)
    }
}

export default function () {
    return new LightTheme()
}