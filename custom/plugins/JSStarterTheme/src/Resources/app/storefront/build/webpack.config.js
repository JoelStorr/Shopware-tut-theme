const {join, resolve } = require('path');

module.exports = () => {
    return {
        resolve:{
            alias: {
                'simple-color-picker': resolve(
                    join(__dirname, '..', 'node_modules', 'simple-color-picker')
                )
            }
        }
    }
}