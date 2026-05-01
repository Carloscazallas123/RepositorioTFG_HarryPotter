package com.harry.paquetes.servicios.implementaciones;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harry.paquetes.dtos.objeto.ObjetoInvDTO;
import com.harry.paquetes.dtos.objeto.ObjetoTiendDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import com.harry.paquetes.entidades.ObjetoEntity;
import com.harry.paquetes.repositorios.RepoObjetos;
import com.harry.paquetes.servicios.interfaces.InterfazObjeto;

@Service
public class ImplementacionObjetos implements InterfazObjeto {

	@Autowired
	private RepoObjetos repositorioObjetos;

	@Override
	public List<ObjetoTiendDTO> mostrartienda() {
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
	public List<ObjetoInvDTO> mostrarinventario(UsuarioFullDTO usuario) {
		List<ObjetoEntity> listaentidades = repositorioObjetos.ObtenerAllObjetos();
		List<Integer>listausuario=usuario.getObjetos();
		List<ObjetoInvDTO>listainventario=new ArrayList<>();
		for (int i=0;i<listaentidades.size();i++) {
			for (int e=0;e<listausuario.size();i++) {
				if(listausuario.get(e)==listaentidades.get(i).getIdobjeto()) {
				listainventario.add( new ObjetoInvDTO(
									listaentidades.get(i).getNombre(),
									listaentidades.get(i).getDescripcion(),
									listaentidades.get(i).getCosto(),
									listaentidades.get(i).getPersonaje().getNombre()));
				}
			}
		}
		return listainventario;
	}

}
