const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/components');

const replacements = [
    { target: /text-\[#1E3A8A\]/g, replacement: 'text-[#171D2C]' },
    { target: /bg-\[#0A1535\]/g, replacement: 'bg-[#171D2C]' }
];

fs.readdir(directoryPath, function (err, files) {
    if (err) return console.log('Unable to scan directory: ' + err); 
    
    files.forEach(function (file) {
        if (path.extname(file) === '.jsx') {
            const filePath = path.join(directoryPath, file);
            let content = fs.readFileSync(filePath, 'utf8');
            let updatedContent = content;
            
            replacements.forEach(({target, replacement}) => {
                updatedContent = updatedContent.replace(target, replacement);
            });
            
            if (content !== updatedContent) {
                fs.writeFileSync(filePath, updatedContent, 'utf8');
                console.log(`Updated ${file}`);
            }
        }
    });
});
