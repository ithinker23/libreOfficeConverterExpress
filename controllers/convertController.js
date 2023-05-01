const converter = require('../services/converter')

module.exports = {
    convertDocxToPDF : (req, res)=>{
        let dir = req.body.dir
        
        console.log(req.body)

        converter.docxToPDFConverter(dir)

        res.sendStatus(200)
    }
}   