import DarkTheme from "./theme/DarkTheme.js"

export class Kratos {
    constructor(body, theme) {
        this.body = body
        this.theme = theme
    }

    run() {
        while (true) {
            Screen.clear(this.theme.backgroundColor)
            Screen.flip()
        }
    }
}

export default function (body = [], theme = DarkTheme()) {
    return new Kratos(body, theme)
}