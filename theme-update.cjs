const fs = require('fs');
const path = require('path');

const dirs = [
    path.join(__dirname, 'src'),
    path.join(__dirname, 'src', 'components')
];

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) return;
        if (!fullPath.endsWith('.jsx')) return;
        
        let content = fs.readFileSync(fullPath, 'utf8');
        let original = content;

        content = content.replace(/brand-teal/g, 'brand-orange');
        content = content.replace(/brand-darkTeal/g, 'brand-yellow');
        content = content.replace(/brand-lightTeal/g, 'brand-lightOrange');
        
        // Header specific blue gradients
        content = content.replace(/from-\[\#29BCFF\] via-\[\#2563FF\] to-\[\#53C9FF\]/g, 'from-[#FFB703] via-[#FF9800] to-[#FF8C00]');
        content = content.replace(/from-\[\#0A2A7A\] to-\[\#1B55DA\]/g, 'from-[#E65100] to-[#FF8C00]');
        content = content.replace(/from-\[\#1E40FF\] to-\[\#38C6FF\]/g, 'from-[#E65100] to-[#FF8C00]');
        content = content.replace(/bg-\[\#102A66\]\/92/g, 'bg-[#1F2937]/92');
        
        // Footer specific blue strings
        content = content.replace(/text-\[\#b7d4cf\]/g, 'text-gray-300');
        
        // Contact specifically if any
        content = content.replace(/text-\[\#1E40FF\]/g, 'text-brand-orange');
        content = content.replace(/bg-\[\#1E40FF\]/g, 'bg-brand-orange');
        
        if (content !== original) {
            fs.writeFileSync(fullPath, content);
            console.log('Updated ' + fullPath);
        }
    });
}
dirs.forEach(processDir);
console.log('Done replacing theme colors in JSX.');
