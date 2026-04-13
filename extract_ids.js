const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Evan\\Desktop\\dev\\homleab\\data.js', 'utf8');

// Use a regex to find the PLAN_DATA array
const planDataMatch = content.match(/const PLAN_DATA = (\[[\s\S]*\]);/);
if (!planDataMatch) {
    console.error("Could not find PLAN_DATA in data.js");
    process.exit(1);
}

// eval is dangerous but this is my own script on my own data
// and I need to parse the JS array which might not be strict JSON
let PLAN_DATA;
try {
    PLAN_DATA = eval(planDataMatch[1]);
} catch (e) {
    console.error("Error evaluating PLAN_DATA:", e);
    process.exit(1);
}

const ids = PLAN_DATA.map(s => ({id: s.id, title: s.title}));
console.log(JSON.stringify(ids, null, 2));
