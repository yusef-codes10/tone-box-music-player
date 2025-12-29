// volume logic is here
function volumeUp() {
    const audio = bgmList[currentMusicId].ost;
    audio.volume = Math.min(1, audio.volume + step);
}

function volumeDown() {
    const audio = bgmList[currentMusicId].ost;
    audio.volume = Math.max(0, audio.volume - step);
}

export {volumeUp, volumeDown}