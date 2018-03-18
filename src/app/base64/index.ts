export const Base64 = {

    _Rixits: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/",

    fromNumber: function (number) {
        if (isNaN(Number(number)) || number === null ||
            number === Number.POSITIVE_INFINITY)
            throw "The input is not valid";
        if (number < 0)
            throw "Can't represent negative numbers now";
        var rixit;
        var residual = Math.floor(number);
        var result = '';
        while (true) {
            rixit = residual % 64
            result = this._Rixits.charAt(rixit) + result;
            residual = Math.floor(residual / 64);

            if (residual == 0)
                break;
        }
        return result;
    },
    toBin(rixits) {
        let result = '';
        let t = rixits.split('');
    
        while (t.length) {
            result += this.toNumber(t.shift()).toString(16);
        }
        return result;
    },

    toNumber(rixits) {
        var result = 0;
        rixits = rixits.split('');
        for (var e = 0; e < rixits.length; e++) {
            result = (result * 64) + this._Rixits.indexOf(rixits[e]);
        }
        return result;
    }
}