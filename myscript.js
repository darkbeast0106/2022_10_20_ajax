const url = "http://localhost:8000/api";
async function autok_listazasa() {
    const result = await fetch(url);
    if (result.status == 200) {        
        const data = await result.json();
        let autok_lista_innerHTML = "";
        data.forEach(auto => {
            console.log(auto);
            const kartya = `<div class="col-md-4">
                <div class="card">
                <div class="card-header">
                <h2>
                    ${auto.rendszam}
                </h2>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <strong>Márka: </strong>${auto.marka}
                </li>
                <li class="list-group-item">
                    <strong>Modell: </strong>${auto.modell}
                </li>
                <li class="list-group-item">
                    <strong>Gyártás éve: </strong>${auto.gyartas_eve}
                </li>
                <li class="list-group-item">
                    <strong>Üzemanyag típus: </strong>${auto.uzemanyag_tipus}
                </li>
                </ul>
            </div>
          </div>`;
            autok_lista_innerHTML += kartya;
        });
        document.getElementById('autok_listaja').innerHTML = autok_lista_innerHTML;
    }
}