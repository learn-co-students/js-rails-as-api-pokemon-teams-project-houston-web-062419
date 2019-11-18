const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

fetch(TRAINERS_URL)
	.then(res => res.json())
	.then(json => {
		console.log(json)
		for (var i = 0; i < json.length; i++) {
			const main = document.querySelector("main")
			p = document.createElement("p")
			//debugger
			main.appendChild(trainer_card(json[i]))
		}

	})


function trainer_card(trainer) {

	const div = document.createElement("div")
	div.className = "card" 
	div.setAttribute("data-id", trainer.id)

	const p = document.createElement("p")
	p.innerText = trainer.name
	div.appendChild(p)

	const btn = document.createElement("button")
	btn.id = ""
}

// <div class="card" data-id="1"><p>Prince</p>
//   <button data-trainer-id="1">Add Pokemon</button>
//   <ul>
//     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
//     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
//     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
//     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
//     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
//   </ul>
// </div>
// ```