fs = require "fs"

fs.readFile "./chapter4/textfile.txt", "utf8", (error, data) ->
    return console.log error if error
    console.log data

fs.writeFile "./chapter4/textfile.txt", "Hello World .. !", "utf8", (error) ->
    return console.log error if error
    console.log "FILE WRITE COMPLETE"
