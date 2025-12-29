// volume logic is here

import { bgmList } from "./bgm";

function volumeUp(id) {
    const audio = bgmList[id].ost;
    audio.volume = Math.min(1, audio.volume + step);
}

function volumeDown(id) {
    const audio = bgmList[id].ost;
    audio.volume = Math.max(0, audio.volume - step);
}

export {volumeUp, volumeDown}