module.exports = function reverse (n) {
    if (n!= 0) {
        return (Math.abs(n)).toString().split("").reverse().join("");
    }
   return 0;
}
