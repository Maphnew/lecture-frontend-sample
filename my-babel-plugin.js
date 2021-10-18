module.exports = function mypBabellugin() {
    return {
        visitor: {
            VariableDeclaration(path) {
                console.log("VariableDeclaration() kind:", path.node.kind) // const
                if (path.node.kind === "const") {
                    path.node.kind = "var"
                }
            },
        },
    }
}