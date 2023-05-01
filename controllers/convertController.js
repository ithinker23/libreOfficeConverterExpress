const converter = require('../services/converter')

module.exports = {
    convertDocxToPDF : (req, res)=>{
        req.setTimeout(1000*60*60);
        
        let dir = req.body.dir
        
        console.log(req.body)

        converter.docxToPDFConverter(dir)

        res.sendStatus(200)
    }
}   