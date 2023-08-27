export default class Theme {
    constructor(backgroundColor, textColor, accentColor, font) {
        this.backgroundColor = backgroundColor
        this.textColor = textColor
        this.accentColor = accentColor
        this.font = font

        this.font.color = this.textColor
    }
}