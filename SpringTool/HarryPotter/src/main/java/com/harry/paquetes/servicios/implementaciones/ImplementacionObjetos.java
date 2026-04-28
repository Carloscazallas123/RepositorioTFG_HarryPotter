package com.harry.paquetes.servicios.implementaciones;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.harry.paquetes.dtos.objeto.ObjetoInvDTO;
import com.harry.paquetes.dtos.objeto.ObjetoTiendDTO;
import com.harry.paquetes.entidades.ObjetoEntity;
import com.harry.paquetes.repositorios.RepoObjetos;
import com.harry.paquetes.servicios.interfaces.InterfazObjeto;

public class ImplementacionObjetos implements InterfazObjeto {

	@Autowired
	private RepoObjetos repositorioObjetos;

	@Override
	public List<ObjetoTiendDTO> mostrartienda() {
		//Creamos dos listas: Una con todas las Entidades y otra para los DTOS
		List<ObjetoEntity> listaentidades = repositorioObjetos.ObtenerAllObjetos();
		List<ObjetoTiendDTO> listatienda = new ArrayList<>();

		//Hacemos un bucle for de 6 veces y vamos
		//Rellenando la lista de las tiendas bajo posiciones aleatorias
		for(int i=0;i<6;i++) {
			int aleatorio= (int) (Math.random()*listaentidades.size());
			listatienda.add( new ObjetoTiendDTO(listaentidades.get(aleatorio).getNombre(),
												listaentidades.get(aleatorio).getDescripcion(),
												listaentidades.get(aleatorio).getCosto()));
		}
		
		return listatienda;
	}

	@Override
	public List<ObjetoInvDTO> mostrarinventario() {
		// TODO Auto-generated method stub
		return null;
	}

}
