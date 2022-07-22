export const test = (req, res) => {
    console.log('inside test controller')

    res.json({message: 'Hello world'})
}