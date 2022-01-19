function init() {

    function bin2dec(bin) {
        var decimal = 0;

        for (var index = bin.length - 1; index >= 0; index--) {
            decimal += parseInt(bin(index)) * Math.pow(2, bin.length - 1 - index);
        }
        return decimal
    }

    console.log(bin2dec("1001"));


}
window.addEventListener("load", init, false)