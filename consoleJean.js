/**
 * 
 * @param {string} param  parametro a ser consolado
 * @param {boolean} stringfy  utilizar stringfy
 */
const consoleJean = (param, stringfy = false) => {
    let jeanzord = param
    if(stringfy){
        jeanzord = JSON.stringify(param)
    }
    console.log(`------------------------------------------------------>${jeanzord}<------------------------------------------------------`)
}
module.exports = {
    consoleJean

}
