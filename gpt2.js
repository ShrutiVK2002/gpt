import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "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", dangerouslyAllowBrowser:true
});

async function main() {
    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content:"what is your bts"}],
        stream: true,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
}

main();