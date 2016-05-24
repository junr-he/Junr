$(document).ready(function () {
    //logo
    YugenLogo.initialize( {
        framerate: 80,
        width: 160,
        height: 200,
        colorSpeedFactor: 0.4,
        morphSpeedFactor: 0.4,
        introSpeedFactor: 2,
        outroSpeedFactor: 2,
        morphStrengthFactor: 0.8,
        morphBaseSpeedFactor: 0.2,
        normalOffsetFactor: 1.5,

        maxShapeRotation: 0.3,
        wordOffsetX: 0,
        wordOffsetY: 0,
        wordScale: 1,
        foregroundScaleX: 0.42,
        foregroundScaleY: 0.58,
        backgroundScaleX: 0.37,
        backgroundScaleY: 0.72,
        shadowAlpha: 0.1,

        shapeQuality: 9,
        containerID: "logo-bg",
        logoCanvasID: "logo-canvas",

        colors:[
            [new YugenLogo.util.Color(250, 250, 250), new YugenLogo.util.Color(0, 0, 0)],
            [new YugenLogo.util.Color(0, 0, 0), new YugenLogo.util.Color(250, 250, 250)]
        ],
        inputs: [
            YugenLogo.input.move,
            YugenLogo.input.press
        ],
        fallbackImages: [

        ]
    });
});