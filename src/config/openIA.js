// No playground dentro do doc da openIA, conseguimos gerar este códiho

module.exports = class openaiApi {

    static configureApi () {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
          });

        return openai;
    }

    static textCompletion({prompt}) {

        return {
            model: "gpt-3.5-turbo",
            prompt: `${prompt}`,
            messages: [
                {
                "role": "user",
                "content": "Diga oi "
                },
                {
                "role": "assistant",
                "content": ""
                }
            ],
            temperature: 0,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        }
    }
}