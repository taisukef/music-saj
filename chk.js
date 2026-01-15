import { MediaTags } from "https://code4fukui.github.io/jsmediatags-es/MediaTags.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("music.csv");
const fn = data[0].fn;

//const bin = await (await fetch(fn)).bytes();
const bin = await Deno.readFile(fn);
const tags = await MediaTags.decode(bin);
console.log(tags);
console.log(tags.tags.picture.data)
await Deno.writeFile("thum.jpg", tags.tags.picture.data);
