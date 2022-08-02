// noinspection JSUnresolvedFunction

XARON = {
    "config": {
        "sound": {
            "play": true,
            /* https://wiki.gtanet.work/index.php?title=FrontEndSoundlist */
            "props": {
                "name": "CHALLENGE_UNLOCKED",
                "setName": "HUD_AWARDS"
            }
        },
        "state": false
    }
}
const sendNuiMessage = (data) => SendNuiMessage(JSON.stringify(data))
XARON.sendNotify = (identifier, title, text, cooldown = 5000) => {
    if(!text || !identifier) return
    sendNuiMessage({
        "type": "show",
        "title": title,
        "identifier": identifier,
        "text": text,
        "cooldown": cooldown
    })

    if(XARON.config.sound.play && !XARON.config.state) {
        XARON.config.state = true
        PlaySoundFrontend(-1, XARON.config.sound.props.name, XARON.config.sound.props.setName, 0)
        setTimeout(() => {
            XARON.config.state = false
        }, cooldown)
    }
}