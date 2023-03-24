const path = require('path');

module.exports = () => {
    return {
        resolve:{
            alias: {
                'simple-color-picker': path.join(__dirname, '..', 'node_modules', 'simple-color-picker'),
                'insert-css': path.join(__dirname, '..', 'node_modules','insert-css' )
                
            }

        }
    };
}