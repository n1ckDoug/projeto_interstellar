document.addEventListener('DOMContentLoaded', function () {

    const altura = 10;

    window.addEventListener('scroll', function () {
        const posicaoAtual = this.window.scrollY;
        const header = document.querySelector('header');

        if (posicaoAtual > altura) {
            header.classList.add('header--scroll');
        } else {
            header.classList.remove('header--scroll');
        }
    });

});