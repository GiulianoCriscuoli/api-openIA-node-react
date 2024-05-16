const openai      = require("../config/openIA");
const inputPrompt = require("../models/inputPrompt");

module.exports = {
    async sendText(req, response) {

        const openaiApi = openai.configureApi();
        const inputModel =  new inputPrompt(req.body);

        try {
            const response = await openaiApi.createCompletation(
                openia.textCompletion(inputModel)
            );
            
            return response.status(200).json({
                success: true,
                data: response.data.choices[0].text
            });

        } catch (err) {

            return response.status(400).json({
                success: false,
                error: error.response ? error.response : "Problemas com o servidor"
            });
        }
    }
}