
const config = {
    "m": 1,
    "cm": 0.01,
    "in": 0.0254,
    "ft": 0.3048,
    "mm": 0.001,
    "km": 1000,
    "yd": 0.9144
};

function converter(data) {
    let value = data.distance.value;
    let unit = data.distance.unit;
    let convertTo = data.convert_to;

    let unitKoef = config[unit];
    let convertToKoef = config[convertTo];

    let result = ((unitKoef / convertToKoef) * value).toFixed(2);
    const object = { unit: convertTo, value: result };
    return JSON.stringify(object);
}

console.log(converter({ distance: { unit: "m", value: 2 }, convert_to: "yd" }));
console.log(converter({ distance: { unit: "ft", value: 1.2 }, convert_to: "ft" }));
console.log(converter({ distance: { unit: "mm", value: 5.5 }, convert_to: "in" }));
console.log(converter({ distance: { unit: "yd", value: 18 }, convert_to: "m" }));

