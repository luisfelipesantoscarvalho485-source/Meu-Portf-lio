let data = new Date();
document.getElementById("data").innerText =
    data.toLocaleDateString("pt-br")
function animarNumero(id, final, prefixo = "") {
    let atual = 0;
    let elemento = document.getElementById(id);

    let intervalo = setInterval(() => {
        atual += Math.ceil(final / 50);
        if (atual >= final) {
            atual = final;
            clearInterval(intervalo);
        }
        elemento.innerText = prefixo + atual;
    }, 20);
}
function atualizarDados() {
    let usuarios = Math.floor(Math.random() * 200);
    let vendas = Math.floor(Math.random() * 1000);
    animarNumero("usuarios", usuarios);
    animarNumero("vendas", vendas, "R$ ");
}
atualizarDados();
setInterval(atualizarDados, 3000);

let status = document.getElementById("status");
function atualizarStatus() {
    let online = Math.random() > 0.3;
    if (online) {
        status.innerText = "Online";
        status.style.color = "lime";
    }
    else {
        status.innerText = "Offline";
        status.style.color = "red";
    }
}
setInterval(atualizarStatus, 3000);


let ctx = document.getElementById("grafico").getContext("2d");

let grafico = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [{
            label: "Vendas",
            data: [100, 200, 300, 250, 400, 650],
            borderColor: "lime",
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
setInterval(() => {
    grafico.data.datasets[0].data = [

        Math.floor(Math.random() * 700),
        Math.floor(Math.random() * 700),
        Math.floor(Math.random() * 700),
        Math.floor(Math.random() * 700),
        Math.floor(Math.random() * 700),
        Math.floor(Math.random() * 700)
    ];

    grafico.update();
}, 3000);




