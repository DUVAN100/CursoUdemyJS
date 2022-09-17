//?llamamoas por el id
const lista = document.getElementById('lista');

Sortable.create(lista, {
	animation: 2000,
	chosenClass: "select",
	dragClass: "drag",
	onEnd: () => {
		Swal.fire({
			title: 'changing positions, please wait...',
			width: 900,
			padding: '3em',
			color: '#F0FFFF',
			background: 'url(../img/loading.png)  no-repeat  '
		  })
	},
	group: "lista-personas",
	store: {
		// Guardamos el orden de la lista
		set: (sortable) => {
			const orden = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, orden.join('|'));
		},

		// Obtenemos el orden de la lista
		get: (sortable) => {
			const orden = localStorage.getItem(sortable.options.group.name);
			return orden ? orden.split('|') : [];
		}
	}
});

