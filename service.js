const Service = require('node-windows').Service

const svc = new Service({
    name: "DocConverter",
    description: "Converts Docx files into PDF format using LibreOffice's Swriter application",
    script: "D:\\Repos\\libreOfficeConverterExpress\\app.js"
})

svc.on('install', ()=>{
    svc.start()
})

svc.install()