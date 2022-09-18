
export default async function generate(prompt: string, max_tokens?: number, temperature?: number) {
    if (!max_tokens) max_tokens = 5;
    return (
        await fetch("https://api.cohere.ai/generate", {
            method: "POST",
            headers: {
                Authorization: "BEARER 1I3QgruVq8jNYETcvgHx6ZhSSzjSN6vscoVMQ1QF",
                "Content-Type": "application/json",
                "Cohere-Version": "2021-11-08",
            },
            body: JSON.stringify({
                prompt,
                max_tokens,
                temperature
            }),
        }).then(response => response.json())
            .then(json => json.generations[0].text)
    ) as string;
}
