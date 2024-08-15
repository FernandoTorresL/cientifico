import getData from '../utils/getData';

const Sol_Operacion_Status = async () => {
	const sol_operacion_status = await getData();
	console.log(sol_operacion_status);

	const view = `
		<div class="Sol_operacion_status">
			${sol_operacion_status.results.map(Sol_operacion_status => `
				<article class="sol_operacion_status-item">
					<a href="#/${sol_operacion_status.operacion}/">
						<img src="${sol_operacion_status.image}" alt="${sol_operacion_status.operacion}">
						<h2>Operación: <span>${sol_operacion_status.operacion}</span></h2>
						<h2>Cantidad: <span>${sol_operacion_status.count}</span></h2>
						<h2>Status (1:Atendido, 0:Sin atender): <span>${sol_operacion_status.atendido}</span></h2>
					</a>
				</article>
			`).join('')}
		</div>
	`;
	return view;
}

export default Sol_Operacion_Status;
