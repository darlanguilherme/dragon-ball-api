module.exports = app => {
    const controller = app.controllers.characters;

    app.route('/api/characters')
        .get(controller.listCharacters);
}