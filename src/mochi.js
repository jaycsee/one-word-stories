function generateGifEmbed(type) {
    if (type === 'spicy') {
        return spicyGifEmbed();
    }
    return genericGifEmbed();
}

function spicyGifEmbed() {
    // <div class="tenor-gif-embed" data-postid="25689407" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/mochi-cat-peach-chin-cute-gif-25689407">Mochi Cat GIF</a>from <a href="https://tenor.com/search/mochi-gifs">Mochi GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    gifEmbeds = ['<div class="tenor-gif-embed" data-postid="25689407" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/mochi-cat-peach-chin-cute-gif-25689407">Mochi Cat GIF</a>from <a href="https://tenor.com/search/mochi-gifs">Mochi GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>', 
    '<div class="tenor-gif-embed" data-postid="13806532" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/peachcat-gif-13806532">Peachcat GIF</a>from <a href="https://tenor.com/search/peachcat-gifs">Peachcat GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>', 
    '<div class="tenor-gif-embed" data-postid="18039319" data-share-method="host" data-aspect-ratio="1.28514" data-width="100%"><a href="https://tenor.com/view/mochi-mochi-peach-cat-gif-18039319">Mochi Mochi Peach Cat GIF</a>from <a href="https://tenor.com/search/mochi+mochi+peach+cat-gifs">Mochi Mochi Peach Cat GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    '<div class="tenor-gif-embed" data-postid="24823706" data-share-method="host" data-aspect-ratio="1.21212" data-width="100%"><a href="https://tenor.com/view/cat-grooming-gif-24823706">Cat Grooming GIF</a>from <a href="https://tenor.com/search/cat-gifs">Cat GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    '<div class="tenor-gif-embed" data-postid="22366972" data-share-method="host" data-aspect-ratio="1.24031" data-width="100%"><a href="https://tenor.com/view/keira-ily-keira-gif-22366972">Keira Ily Keira GIF</a>from <a href="https://tenor.com/search/keira-gifs">Keira GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    '<div class="tenor-gif-embed" data-postid="22479609" data-share-method="host" data-aspect-ratio="1.42857" data-width="100%"><a href="https://tenor.com/view/peach-and-goma-angry-cat-gif-22479609">Peach And GIF</a>from <a href="https://tenor.com/search/peach-gifs">Peach GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    '<div class="tenor-gif-embed" data-postid="24419701" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/peach-cat-bin-gif-24419701">Peach Cat GIF</a>from <a href="https://tenor.com/search/peach-gifs">Peach GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    '<div class="tenor-gif-embed" data-postid="19555995" data-share-method="host" data-aspect-ratio="1.24031" data-width="100%"><a href="https://tenor.com/view/cat-cute-hug-huggies-kozumexzumire-gif-19555995">Cat Cute GIF</a>from <a href="https://tenor.com/search/cat-gifs">Cat GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>', 
    '<div class="tenor-gif-embed" data-postid="21391528" data-share-method="host" data-aspect-ratio="1.26482" data-width="100%"><a href="https://tenor.com/view/peach-goma-peach-and-goma-heart-love-gif-21391528">Peach Goma GIF</a>from <a href="https://tenor.com/search/peach-gifs">Peach GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>']

    max = gifEmbeds.length;
    min = 0;
    index = Math.floor(Math.random()) * (max - min) + min;

    return gifEmbeds[index];
} 

function genericGifEmbed() {
    return '<div class="tenor-gif-embed" data-postid="17412017" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/books-objects-joypixels-books-with-different-colors-literature-gif-17412017">Books Objects Sticker</a>from <a href="https://tenor.com/search/books-stickers">Books Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>';
}