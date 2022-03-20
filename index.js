const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())

const router = require('./routes/metrics24.routes')




app.use(express.json())
app.use('/api',router)

app.listen(PORT, () => console.log(`server runnion on port ${PORT}`))