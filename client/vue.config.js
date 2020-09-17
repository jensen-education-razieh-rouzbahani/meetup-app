const path = require("path");
module.exports = {
    outputDir: path.resolve(path.join(__dirname, "../api/dist")),
    devServer: {
        proxy: {
            "^/api": {
                target: "http://api:5000",
            },
        },
    },
};