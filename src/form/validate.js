function requiredInput(input) {
    return input ? undefined : 'Значение пусто'
}

function shortInput(input) {
    return input.length > 5 ? undefined : 'Значение короткое'
}

function longInput(input) {
    return input.length < 50 ? undefined : 'Значение длинное'
}

export { requiredInput, shortInput, longInput }