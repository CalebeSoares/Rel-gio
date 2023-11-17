const horas = document.getElementById('hora')
const calendario = document.getElementById('data')

const relogio =setInterval(() => {
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()
    
    let dia = data.getDate()
    let diaSemana = data.getDay()
    let mes = data.getMonth()
    let ano = data.getFullYear()

    let semanas = new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado")
    
    if (hora < 10) hora = '0'+ hora
    if (minuto < 10) minuto = '0'+ minuto
    if (segundo < 10) segundo = '0'+ segundo

    if (dia < 10) dia = '0' + dia
    if (mes < 10) mes = '0' + mes

    horas.innerHTML = `${hora}:${minuto}:${segundo}`
    calendario.innerHTML = `${semanas[diaSemana]} - ${dia}.${mes}.${ano}`
    
}, 1000);

