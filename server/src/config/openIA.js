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
            model: "gpt-4o-mini",
            prompt: `${prompt}`,
            messages: [
                {
                "role": "user",
                "content": "Diga oi"
                },
                {
                "role": "assistant",
                "content": ""
                }
            ],
            temperature: 1,
            max_completion_tokens: 4096,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        }
    }
}