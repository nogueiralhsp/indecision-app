const indecisitionBtn = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]

    const deuBom = app.options.filter((option) => {
        if (option === 'andar de moto') {
            return 'andar de moto'
        }
    })
    console.log('deu bom',deuBom);

    if (deuBom[0] === 'andar de moto') {
        alert('andar de moto')
    } else {
        alert(option)
    }
}