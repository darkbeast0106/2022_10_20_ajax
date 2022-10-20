const url = "http://localhost:8000/api";
async function autok_listazasa() {
    const result = await fetch(url);
    if (result.status == 200) {        
        const data = await result.json();
        let autok_lista_innerHTML = "";
        data.forEach(auto => {
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

async function auto_felvetele() {
    const rendszam = document.getElementById("rendszam_input").value;
    const marka = document.getElementById("marka_input").value;
    const modell = document.getElementById("modell_input").value;
    const gyartas_eve = document.getElementById("gyartas_eve_input").value;
    const uzemanyag = document.getElementById("uzemanyag_input").value;

    const result = await fetch(url+"/felvesz.php", {
        method: "POST",
        body: JSON.stringify({
            rendszam: rendszam,
            marka: marka,
            modell: modell,
            gyartas_eve: gyartas_eve,
            uzemanyag: uzemanyag,
        }),
        headers: {
            'Content-Type': "application/json"
        }
    });
    const data = await result.json();
    if (result.status == 201) {
        autok_listazasa();
    } else {
        alert(data.message);
    }
}