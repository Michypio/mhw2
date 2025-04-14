document.querySelectorAll('.prodotto button').forEach(button => {
    button.addEventListener('click', (event) => {
        const prodotto = event.target.closest('.prodotto');
        const nomeProdotto = prodotto.querySelector('h3').innerText;
        const prezzoProdotto = prodotto.querySelector('p').innerText;
        
        alert(`Hai acquistato: ${nomeProdotto}\nPrezzo: ${prezzoProdotto}`);
    });
});

document.querySelector('.header-center a').addEventListener('click', (event) => {
    const header = document.querySelector('.header');
    header.style.backgroundImage = "src('nuovo_sfondo.jpeg')";
});

document.querySelectorAll('.prodotto button').forEach(button => {
    button.addEventListener('click', (event) => {
        const messaggio = document.createElement('div');
        messaggio.classList.add('messaggio-acquisto');
        messaggio.innerHTML = '<p>Acquisto confermato!</p>';
        
        document.body.appendChild(messaggio);
        setTimeout(() => {
            messaggio.remove();
        }, 3000);
    });
});

document.querySelector('.albo .nascondi-pulsante').addEventListener('click', () => {
    const albo = document.querySelector('.albo');
    const mostra = document.querySelector('.shop .mostra-pulsante');
    albo.classList.add('hidden');
    mostra.classList.remove('hidden');
});

document.querySelector('.shop .mostra-pulsante').addEventListener('click', () => {
    const mostra = document.querySelector('.shop .mostra-pulsante');
    const albo = document.querySelector('.albo');
    albo.classList.remove('hidden');
    mostra.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    const btnMostraPartite = document.getElementById('mostra-altre-partite');
    const partiteContainer = document.querySelector('.partite-container');
    const partiteOriginali = Array.from(partiteContainer.children);
    
    btnMostraPartite.addEventListener('click', () => {
        partiteContainer.classList.add('show-all');
        const nuovePartite = [
            {
                data: "27 Apr 2025 - 20:45",
                squadraCasa: "Inter",
                squadraOspite: "Roma",
                stadio: "San Siro, Milano"
            },
            {
                data: "04 Mag 2025 - 18:00",
                squadraCasa: "Inter",
                squadraOspite: "Verona",
                stadio: "San Siro, Milano"
            },
            {
                data: "11 Mag 2025 - 20:45",
                squadraCasa: "Torino",
                squadraOspite: "Inter",
                stadio: "Olimpico Grande Torino, Torino"
            },
            {
                data: "18 Mag 2025 - 20:45",
                squadraCasa: "Inter",
                squadraOspite: "Lazio",
                stadio: "San Siro, Milano"
            },
            {
                data: "25 Mag 2025 - 20:45",
                squadraCasa: "Como",
                squadraOspite: "Inter",
                stadio: "Stadio Giuseppe Sinigaglia, Como"
             },

        ];

        nuovePartite.forEach(partita => {
            const partitaElement = document.createElement('div');
            partitaElement.className = 'partita';
            partitaElement.innerHTML = `
                <p class="data">${partita.data}</p>
                <div class="squadre">
                    <span>${partita.squadraCasa}</span>
                    <span>vs</span>
                    <span>${partita.squadraOspite}</span>
                </div>
                <p class="stadio">${partita.stadio}</p>
                <img src="scudetto.png" >
            `;
            partiteContainer.appendChild(partitaElement);
        });

        btnMostraPartite.style.display = 'none';
        
        const btnTornaIndietro = document.createElement('button');
        btnTornaIndietro.id = 'torna-indietro';
        btnTornaIndietro.textContent = 'Mostra meno partite';
        btnTornaIndietro.addEventListener('click', () => {
            partiteContainer.classList.remove('show-all');
            partiteContainer.innerHTML = '';
            partiteOriginali.forEach(partita => {
                partiteContainer.appendChild(partita.cloneNode(true));
            });
            btnMostraPartite.style.display = 'inline-block';
            btnTornaIndietro.remove();
        });
        
        document.querySelector('.partite').appendChild(btnTornaIndietro);
    });

    const giocatori = [
        {
            nome: "Yann Sommer",
            numero: "1",
            ruolo: "Portiere",
            immagine: "sommer.webp",
            nazionalita: "Svizzera"
        },
        {
            nome: "Josep Martinez",
            numero: "13",
            ruolo: "Portiere",
            immagine: "josep.webp",
            nazionalita: "Spagna"
        },
        {
            nome: "Raffaele Di Gennaro",
            numero: "12",
            ruolo: "Portiere",
            immagine: "di_gennaro.webp",
            nazionalita: "Italia"
        },
        {
            nome: "Stefan De Vrij",
            numero: "6",
            ruolo: "Difensore",
            immagine: "devrij.webp",
            nazionalita: "Olanda"
        },
        {
            nome: "Francesco Acerbi",
            numero: "15",
            ruolo: "Difensore",
            immagine: "acerbi.webp",
            nazionalita: "Italia"
        },
        {
            nome: "Alessandro Bastoni",
            numero: "95",
            ruolo: "Difensore",
            immagine: "bastoni.webp",
            nazionalita: "Italia"
        },
        {
            nome: "Benjamin Pavard",
            numero: "28",
            ruolo: "Difensore",
            immagine: "pavard.webp",
            nazionalita: "Francia"
        },
        {
            nome: "Federico Dimarco",
            numero: "32",
            ruolo: "Difensore",
            immagine: "dimarco.webp",
            nazionalita: "Italia"
        },
        {
            nome: "Matteo Darmian",
            numero: "36",
            ruolo: "Difensore",
            immagine: "darmian.webp",
            nazionalita: "Italia"
        },
        {
            nome: "Carlos Augusto",
            numero: "30",
            ruolo: "Difensore",
            immagine: "carlos.webp",
            nazionalita: "Brasile"
        },
        {
            nome: "Denzel Dumfries",
            numero: "2",
            ruolo: "Difensore",
            immagine: "dumfries.webp",
            nazionalita: "Olanda"
        },
        {
            nome: "Yann Bisseck",
            numero: "31",
            ruolo: "Difensore",
            immagine: "bisseck.webp",
            nazionalita: "Germania"
        },
        {
            nome: "Nicolò Barella",
            numero: "23",
            ruolo: "Centrocampista",
            immagine: "barella.webp",
            nazionalita: "Italia"
        },
        {
            nome: "Hakan Çalhanoğlu",
            numero: "20",
            ruolo: "Centrocampista",
            immagine: "calhanoglu.webp",
            nazionalita: "Turchia"
        },
        {
            nome: "Henrikh Mkhitaryan",
            numero: "22",
            ruolo: "Centrocampista",
            immagine: "mkhitaryan.webp",
            nazionalita: "Armenia"
        },
        {
            nome: "Kristjan Asllani",
            numero: "21",
            ruolo: "Centrocampista",
            immagine: "asllani.webp",
            nazionalita: "Albania"
        },
        {
            nome: "Davide Frattesi",
            numero: "16",
            ruolo: "Centrocampista",
            immagine: "frattesi.webp",
            nazionalita: "Italia"
        },
        {
            nome: "Piotr Zielinski",
            numero: "7",
            ruolo: "Centrocampista",
            immagine: "zielinski.webp",
            nazionalita: "Polonia"  
        },
        {
            nome: "Nicola Zalewski",
            numero: "59",
            ruolo: "Centrocampista",
            immagine: "zalewski.webp",
            nazionalita: "Polonia"
        },
        {
            nome: "Valentin Carboni",
            numero: "45",
            ruolo: "Centrocampista",
            immagine: "carboni.webp",
            nazionalita: "Argentina"    
        },
        {
            nome: "Lautaro Martinez",
            numero: "10",
            ruolo: "Attaccante",
            immagine: "lautaro.webp",
            nazionalita: "Argentina"
        },
        {
            nome: "Marcus Thuram",
            numero: "9",
            ruolo: "Attaccante",
            immagine: "thuram.webp",
            nazionalita: "Francia"
        },
        {
            nome: "Marko Arnautovic",
            numero: "8",
            ruolo: "Attaccante",
            immagine: "arnautovic.webp",
            nazionalita: "Austria"
        },
        {
            nome: "Joaquin Correa",
            numero: "11",
            ruolo: "Attaccante",
            immagine: "correa.webp",
            nazionalita: "Argentina"
        },
        {
            nome: "Mehdi Taremi",
            numero: "99",
            ruolo: "Attaccante",
            immagine: "taremi.webp",
            nazionalita: "Iran" 
        }
    ];
    const allenatore = {
        nome: "Simone Inzaghi",
        ruolo: "Allenatore",
        immagine: "inzaghi.webp",
        nazionalita: "Italia"
    };

    const rosaSection = document.createElement('section');
    rosaSection.className = 'rosa';

    const titolo = document.createElement('h2');
    titolo.textContent = 'Rosa';

    const filtriContainer = document.createElement('div');
    filtriContainer.className = 'filtri-ruolo';
    
    const ruoli = ['Tutti', 'Portiere', 'Difensore', 'Centrocampista', 'Attaccante', 'Allenatore'];
    ruoli.forEach(ruolo => {
        const button = document.createElement('button');
        button.textContent = ruolo;
        button.className = 'filtro-btn';
        button.addEventListener('click', () => {
            filtriContainer.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const cards = container.querySelectorAll('.giocatore-card');
            cards.forEach(card => {
                if (ruolo === 'Tutti' || card.dataset.ruolo === ruolo) {
                    card.classList.add('visible');
                    card.classList.remove('hidden');
                } else {
                    card.classList.remove('visible');
                    card.classList.add('hidden');
                }
            });

            container.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        });
        filtriContainer.appendChild(button);
    });

    rosaSection.append(titolo, filtriContainer);

    const container = document.createElement('div');
    container.className = 'rosa-container';

    giocatori
        .sort((a, b) => parseInt(a.numero) - parseInt(b.numero))
        .forEach(giocatore => {
            const card = document.createElement('div');
            card.className = 'giocatore-card visible';
            card.dataset.ruolo = giocatore.ruolo;
            card.dataset.nazionalita = giocatore.nazionalita;

            const numero = document.createElement('span');
            numero.className = 'numero';
            numero.textContent = giocatore.numero;

            const headerInfo = document.createElement('div');
            headerInfo.className = 'header-info';

            const [nome, ...cognomeParts] = giocatore.nome.split(' ');
            const cognome = cognomeParts.join(' ');

            const nomeElement = document.createElement('span');
            nomeElement.className = 'nome';
            nomeElement.textContent = nome;

            const cognomeElement = document.createElement('span');
            cognomeElement.className = 'cognome';
            cognomeElement.textContent = cognome;

            const ruolo = document.createElement('span');
            ruolo.className = 'ruolo';
            ruolo.textContent = giocatore.ruolo.substring(0, 3).toUpperCase(); // Abbrevia il ruolo

            const img = document.createElement('img');
            img.src = giocatore.immagine;
            img.alt = giocatore.nome;

            headerInfo.append(nomeElement, cognomeElement, ruolo);
            card.append(numero, headerInfo, img);
            container.appendChild(card);
        });

    // Anche per l'allenatore
    const allenatoreCard = document.createElement('div');
    allenatoreCard.className = 'giocatore-card visible';
    allenatoreCard.dataset.ruolo = 'Allenatore';
    allenatoreCard.dataset.nazionalita = allenatore.nazionalita;

    const headerInfo = document.createElement('div');
    headerInfo.className = 'header-info';

    const [nome, ...cognomeParts] = allenatore.nome.split(' ');
    const cognome = cognomeParts.join(' ');

    const nomeElement = document.createElement('span');
    nomeElement.className = 'nome';
    nomeElement.textContent = nome;

    const cognomeElement = document.createElement('span');
    cognomeElement.className = 'cognome';
    cognomeElement.textContent = cognome;

    const ruolo = document.createElement('span');
    ruolo.className = 'ruolo';
    ruolo.textContent = 'ALL';

    const img = document.createElement('img');
    img.src = allenatore.immagine;
    img.alt = allenatore.nome;

    headerInfo.append(nomeElement, cognomeElement, ruolo);
    allenatoreCard.append(headerInfo, img);
    container.appendChild(allenatoreCard);

    rosaSection.appendChild(container);

    document.querySelector('.notizie').after(rosaSection);
});

