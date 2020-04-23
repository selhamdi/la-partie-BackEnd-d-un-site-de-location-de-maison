const fs = require('fs');

 
exports.LoadJson = function LoadJson (fileName ='')
{
    if(fs.existsSync(fileName))
    {
        return JSON.parse( fs.readFileSync(fileName));
    }
    else
    return "''";
};
exports.SaveJson = function SaveJson (fileName ='',json="''")
{
    return fs.writeFileSync(fileName,JSON.stringify(json))
};