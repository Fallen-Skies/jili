export default {
    formatNumber: function(num) {
        if (isNaN(num)) {
            throw new TypeError("num is not a number");
        }
        return ("" + num).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
    }
}