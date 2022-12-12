class ThemeExtend {
    static modifyHeader() {
        const target = document.getElementById("page-header");
        target.style.height = "80vh";
    }
}

(() => {
    const callback = window.onload || (() => {
    });
    window.onload = () => {
        callback();
        ThemeExtend.modifyHeader();
    };
})();