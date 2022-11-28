type RGB = [number,number,number];

export default function accessibilityColorSelector(
    { imageLink, position }: { imageLink: string | undefined, position: string | undefined}) {
    if (typeof imageLink === "undefined") {
        throw new Error('Image link is required');
    }

    const image = new Image();
    image.src = imageLink;
    let canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    switch (position) {
        case "left":
            canvas = cropImage(imageLink, 0, 0, 100, image.height);
            break;
        case "center":
            canvas = cropImage(imageLink, image.width/2, 0, 100, image.height);
            break;
        case "right":
            canvas = cropImage(imageLink, image.width/-100, 0, 100, image.height);
            break;            
    
        default:
            canvas.width = image.width;
            canvas.height = image.height;
            context!.drawImage(image, 0, 0);
            break;
    }

    const imageData = context!.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let averageRGB: RGB = [0, 0, 0];
    let count = 0;
    for (let colorFragment = 0; colorFragment+4 < data.length; colorFragment+=4) {
        const color = [data[colorFragment], data[colorFragment+1], data[colorFragment+2]];
        if (colorFragment == 0){
            averageRGB = [color[0], color[1], color[2]];
        } else {
            averageRGB[0] = Math.floor((averageRGB[0] * count + color[0]) / (count + 1));
            averageRGB[1] = Math.floor((averageRGB[1] * count + color[1]) / (count + 1));
            averageRGB[2] = Math.floor((averageRGB[2] * count + color[2]) / (count + 1));
        }
        count++;
    }

    const dark = getComputedStyle(document.documentElement).getPropertyValue('--dark');
    const light = getComputedStyle(document.documentElement).getPropertyValue('--light');

    console.log("itsok");
    return contrast(averageRGB, getRgbColorFromHex(dark)) > contrast(averageRGB, getRgbColorFromHex(light)) ? dark : light;
}

function contrast(foregroundColor: RGB, backgroundColor: RGB) {
    const foregroundLumiance = luminance(foregroundColor);
    const backgroundLuminance = luminance(backgroundColor);
    return backgroundLuminance < foregroundLumiance
        ? ((backgroundLuminance + 0.05) / (foregroundLumiance + 0.05))
        : ((foregroundLumiance + 0.05) / (backgroundLuminance + 0.05));
};

function luminance(rgb: RGB) {
    const [r,g,b] = rgb.map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return r * 0.2126 + g * 0.7152 + b * 0.0722;
};

function getRgbColorFromHex(hex: string) {
    hex = hex.slice(1);
    const value = parseInt(hex, 16);
    const r = (value >> 16) & 255;
    const g = (value >> 8) & 255;
    const b = value & 255;

    return [r, g, b] as RGB;
};

function cropImage(imageLink: string, x: number, y: number, width: number, height: number) {
    const image = new Image();
    image.src = imageLink;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    context!.drawImage(image, x, y, width, height, 0, 0, width, height);
    return canvas;
}