// volume logic is here

import { bgmList } from "./bgm";

function volumeUp(id, s) {
    const audio = bgmList[id].ost;
    audio.volume = Math.min(1, audio.volume + s);
}

function volumeDown(id, s) {
    const audio = bgmList[id].ost;
    audio.volume = Math.max(0, audio.volume - s);
}

export {volumeUp, volumeDown}

// scope and dependency design issue