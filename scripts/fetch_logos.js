const fs = require('fs');
const path = require('path');
const https = require('https');

// Manual website mapping for missing entries
const missingWebsites = {
    "RSA": "https://www.rsa.com/",
    "Kaspersky": "https://www.kaspersky.com/",
};

// Quick regex-based parser since we can't import the module easily in a standalone script without type: module or transpilation
// We will just read the file content and parse the array structure roughly or just copy the array here for safety.
// Actually, reading the file and regexing the array is safer to keep it in sync.

const partnersDataPath = path.join(__dirname, '../src/data/partners.js');
const rawContent = fs.readFileSync(partnersDataPath, 'utf8');

// Simple extraction of the array content
// This assumes the format: export const partnersData = [ ... ];
const match = rawContent.match(/export const partnersData = \[\s*([\s\S]*?)\];/);
if (!match) {
    console.error("Could not parse partners data.");
    process.exit(1);
}

// Evaluate the array content (safeish in this controlled env)
const partnersList = eval(`[${match[1]}]`);

const publicDir = path.join(__dirname, '../public/partners');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

async function downloadLogo(partner) {
    let website = partner.website;
    if (!website && missingWebsites[partner.name]) {
        website = missingWebsites[partner.name];
        console.log(`Using manual website for ${partner.name}: ${website}`);
    }

    if (!website) {
        console.log(`Skipping ${partner.name} - No website found`);
        return null;
    }

    const sanitizedName = partner.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const filename = `${sanitizedName}.png`;
    const filepath = path.join(publicDir, filename);
    const logoUrl = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${website}&size=128`;

    return new Promise((resolve) => {
        https.get(logoUrl, (res) => {
            if (res.statusCode === 200) {
                const fileStream = fs.createWriteStream(filepath);
                res.pipe(fileStream);
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`Downloaded logo for ${partner.name}`);
                    resolve(`/partners/${filename}`);
                });
            } else {
                console.error(`Failed to download logo for ${partner.name} (${res.statusCode})`);
                resolve(null);
            }
        }).on('error', (err) => {
            console.error(`Error downloading ${partner.name}: ${err.message}`);
            resolve(null);
        });
    });
}

async function main() {
    let updatedContent = rawContent;

    for (const partner of partnersList) {
        const logoPath = await downloadLogo(partner);
        if (logoPath) {
            // Update the file content string
            // We look for the line containing the specific partner name to be safe
            // { name: "RSA", category: "Cybersecurity", website: "" },
            // replace with
            // { name: "RSA", category: "Cybersecurity", website: "...", logo: "/partners/rsa.png" },

            // Regex to find the object block for this partner
            // Matches: { name: "Name", ... }
            const escapedName = partner.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const partnerRegex = new RegExp(`\\{\\s*name:\\s*"${escapedName}"[^}]*\\}`, 'g');

            // Reconstruct the object string with the logo
            let website = partner.website || missingWebsites[partner.name] || "";
            const newObjectStr = `{ name: "${partner.name}", category: "${partner.category}", website: "${website}", logo: "${logoPath}" }`;

            updatedContent = updatedContent.replace(partnerRegex, newObjectStr);
        }
    }

    fs.writeFileSync(partnersDataPath, updatedContent, 'utf8');
    console.log("Updated partners.js with logo paths.");
}

main();
