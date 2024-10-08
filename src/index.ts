import express from "express"
const app = express()
const PORT = 8000
app.get('/', (req, res) => {
  res.json({
    msg:"Hello World",
    url:process.env.URL
  })
  console.log(process.env.URL)

})
app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})