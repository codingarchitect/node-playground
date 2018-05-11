const getUnixTimeStampWithTimezoneOffset = (jsDate) => (jsDate.getTime() + jsDate.getTimezoneOffset() * 60 * 1000) / 1000;
const getUnixTimeStamp = (jsDate) => jsDate.getTime() / 1000;

const tenthMay2018 = new Date(2018, 4, 10);

console.log(`moment(tenthMay2018).unix(): ${moment(tenthMay2018).unix()}`);
console.log(`moment.utc(tenthMay2018).unix(): ${moment.utc(tenthMay2018).unix()}`);
console.log(`moment(tenthMay2018).utc().unix(): ${moment(tenthMay2018).utc().unix()}`);
console.log(`moment(tenthMay2018.toGMTString()).unix(): ${moment(tenthMay2018.toGMTString()).unix()}`);
console.log(`getUnixTimeStampWithTimezoneOffset(tenthMay2018): ${getUnixTimeStampWithTimezoneOffset(tenthMay2018)}`);
console.log(`getUnixTimeStamp(tenthMay2018): ${getUnixTimeStamp(tenthMay2018)}`);
console.log(`tenthMay2018 / 1000: ${moment(tenthMay2018.toGMTString()).unix()}`);