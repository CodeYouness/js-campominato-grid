# JS-CAMPOMINATO-GRID:
- L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe.
- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
## Bonus
- Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
    1. con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    2. con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    3. con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
**Consigli del giorno:** 
- Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi. 
    - Ad esempio: Di cosa ho bisogno per generare i numeri?
- Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.

## soluzione (senza bonus) ##

- mi collego al contenitore della griglia
- ripeto queste cose per ogni cella della mia griglia:
    1. creo una cella
    2. do una classe alla mia cella
    3. do il testo interno della cella (il numero sarà lo stesso del numero della ripetizione)
    4. lo aggiungo al contenitore
    5. creo un evento per cui al verificarsi del click su una cella deve:
        - aggiungendogli una classe cambia colore 
        - dico lo stesso numero che è contenuto nella cella


## soluzione (con bonus) ##

- mi collego al contenitore della griglia
- mi collego al select e:
    - se è in difficoltà easy allora:
        invoco la funzione che come argomenti ha il numero di celle max (100) e le misure delle celle e:
        1. creo una cella
        2. do come classe alla mia cella la misura che ho come argomento
        3. do il testo interno della cella (il numero sarà lo stesso del numero della ripetizione)
        4. lo aggiungo al contenitore
        5. creo un evento per cui al verificarsi del click su una cella deve:
            - aggiungendogli una classe cambia colore 
            - dico lo stesso numero che è contenuto nella cella

    - se è in difficoltà hard allora:
        - invoco la funzione che come argomenti ha il numero di celle max (81) e le misure delle celle

    - se è in difficoltà crazy allora:
        - invoco la funzione che come argomenti ha il numero di celle max (49) e le misure delle celle
