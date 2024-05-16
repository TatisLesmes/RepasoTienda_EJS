const router = require('express').Router()
const fs = require('fs')
const path = require('path')


const json_data = fs.readFileSync('src/data.json', 'utf-8')
let data = JSON.parse(json_data)
console.log(data)

const json_list = fs.readFileSync('src/list.json', 'utf-8')
let list = JSON.parse(json_list)
console.log(list.length)


router.get('/', (req, res) => {
    res.render('index.ejs', { products: data.products })
})

router.get('/footer', (req, res) =>{
    res.render('footer.js', {
        list
    }) 
})

router.get('/sales', (req, res) =>{
    res.render('sales.ejs', { products: data.products })
   
})




router.post('/sales', (req, res) => {

    const {producto, cantidad} = req.body

    if(!producto || !cantidad) {
        res.status(400).send("Campos incompletos")
        return
    }

    
    let newList = {
        producto,    
        cantidad
    }

    list.push(newList)


    const  json_list = JSON.stringify(list)
    fs.writeFileSync('src/list.json', json_list, 'utf-8')
    res.redirect('/sales')


})










module.exports = router