const nota = document.querySelectorAll('.valor')
const enviar = document.querySelector('.enviar')
const voltar = document.querySelector('.voltar')

nota.forEach(function (item, indice) {
    item.addEventListener("click", () => {
        document.querySelector('.resultado').innerHTML = `Você selecionou ${indice + 1} de 5`
    })
})

enviar.addEventListener('click', () => {
    document.getElementById('ocultar').classList.add('oculto')
    document.getElementById('mostrar').classList.remove('oculto')
})

voltar.addEventListener('click', () => {
    document.getElementById('ocultar').classList.remove('oculto')
    document.getElementById('mostrar').classList.add('oculto')
})