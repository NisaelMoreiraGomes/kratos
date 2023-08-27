import { GREY_200, GREY_900, WHITE } from "../constant/color.js"
import Theme from "./Theme.js"
import { ROBOTO } from "../constant/fonts.js"

export class DarkTheme extends Theme {
    constructor() {
        super(GREY_900, WHITE, GREY_200, ROBOTO)
    }
}

export default function () {
    return new DarkTheme()
}