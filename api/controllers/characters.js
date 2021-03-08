module.exports = (app) => {
    const characters = app.data.characters;
    const controller = {};

    controller.listCharacters = (req, res) => {
        res.status(200).json(characters);
    }

    return controller;
}