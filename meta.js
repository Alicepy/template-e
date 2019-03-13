module.exports = {
    "prompts": {
        "name": {
            "type"    : "string",
            "required": false,
            "message" : "Project name",
            "default" : "ts-tools"
        },
        "description": {
            "type"    : "string",
            "required": false,
            "message" : "Project description",
            "default" : "A new typescript project"
        },
        "author": {
            "type"   : "string",
            "message": "Author"
        }
    },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n"
}