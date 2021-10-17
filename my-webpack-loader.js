module.exports = function myWebpackLoader (content) {
    // console.log('myWebpackLoader')
    return content.replace('console.log(', 'alert(')
}