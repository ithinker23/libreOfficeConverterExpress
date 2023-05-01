const fs = require('fs');
const { execSync } = require('child_process');

function getDirs(path) {
    return {
        directories: fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path + '/' + file).isDirectory();
        })
    }
}

async function docxToPDFConverter(dirPath) {

    let dirsAndDocs = getDirs(dirPath)

    dirsAndDocs.directories.forEach(dir => {
        docxToPDFConverter(dirPath + "/" + dir)
    })
    execSync('"C:/Program Files/LibreOffice/program/swriter.exe" --convert-to pdf --invisible "'+ dirPath +'/*.docx" --outdir "'+ dirPath + '"');

}


module.exports = { docxToPDFConverter }
