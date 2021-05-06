const fs = require('fs');

const crearArchivo = ( base, list, until) => new Promise( (resolve, reject) => {
    try {
        let salida = '';
        let fileName = `tabla-${base}.txt`;
    
        for( let i=1; i<=until; i++){
            salida += `${base} x ${i} = ${ base * (i)}\n`;
        }
        
        if(list) console.log(salida);
    
        fs.writeFileSync( 'salida/'+fileName, salida );
        resolve(fileName);
        
    } catch (error) {
        reject(error);
    }
})

module.exports = {
    crearArchivo
}