
export default async function generate(prompt: string, apiKey: string, max_tokens?: number) {
    if (!max_tokens) max_tokens = 5;
    return (
        await fetch("https://api.cohere.ai/generate", {
            method: "POST",
            headers: {
                Authorization: "BEARER " + apiKey,
                "Content-Type": "application/json",
                "Cohere-Version": "2021-11-08",
            },
            body: JSON.stringify({
                prompt,
                max_tokens
            }),
        }).then(response => response.json())
            .then(json => json.generations[0].text)
    ) as string;
}
