const express = require("express")
const app = express()
const langage = require('./translation.json')


const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) => {
    res.render('home',{
        layout : 'main'
    })
})

app.get('/:lang?', (req,res) => {
    const {lang} = req.params
    if(lang === 'fr' || undefined){
        res.render('trad',{
            layout : 'main',
            title : langage.fr.title,
            pageTitle : langage.fr.pageTitle
        })
    }
    else if (lang === 'en'){
        res.render('trad',{
            layout : 'main',
            title : langage.en.title,
            pageTitle : langage.en.pageTitle
        })
    }
    else{
        res.render('trad',{
            layout : 'main',
            title : langage.es.title,
            pageTitle : langage.es.pageTitle
        })

    }
})

const port = 5000
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})