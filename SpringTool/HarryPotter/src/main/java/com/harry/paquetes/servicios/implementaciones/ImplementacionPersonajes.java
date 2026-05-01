package com.harry.paquetes.servicios.implementaciones;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harry.paquetes.dtos.personajes.PersonajeMostDTO;
import com.harry.paquetes.dtos.personajes.PersonajeVistDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import com.harry.paquetes.entidades.ObjetoEntity;
import com.harry.paquetes.entidades.PersonajeEntity;
import com.harry.paquetes.repositorios.RepoObjetos;
import com.harry.paquetes.repositorios.RepoPersonajes;
import com.harry.paquetes.servicios.interfaces.InterfazPersonaje;

@Service
public class ImplementacionPersonajes implements InterfazPersonaje {

	@Autowired
	RepoPersonajes repositoriopersonajes;
	
	@Autowired
	RepoObjetos repoobjetos;
	@Override
	public List<PersonajeMostDTO> mostrarbesbloqueados(UsuarioFullDTO usuario) {
		List<Integer>listausuario=usuario.getPersonajes();
		List<PersonajeMostDTO>listadesbloqueados=new ArrayList<>();
		for (int i=0;i<listausuario.size();i++) {
			PersonajeEntity entidad= repositoriopersonajes.ObtenerPorid(listausuario.get(i));
			listadesbloqueados.add(new PersonajeMostDTO(
								   entidad.getNombre(),
								   entidad.getCasa()));
		}
		return listadesbloqueados;
	}

	@Override
	public PersonajeVistDTO mostrarpersonaje(int id) {
		PersonajeEntity entidad= repositoriopersonajes.ObtenerPorid(id);
		List<String>objetos=rellenarlistaobjetos(id);
		PersonajeVistDTO personaje= new PersonajeVistDTO(entidad.getNombre(),
														 entidad.getDescripcion(),
														 entidad.getCasa(),objetos);
		return personaje;
	}
	
	//-----------Procesos externos
	
	public List<String> rellenarlistaobjetos(int id){
	List<ObjetoEntity>listaentidades=repoobjetos.ObtenerAllObjetos();
	List<String>objetos=new ArrayList<>();
		for(int i=0;i<listaentidades.size();i++) {
			if(listaentidades.get(i).getPersonaje().getIdpersonaje()==id) {
				objetos.add(listaentidades.get(i).getNombre());
			}
		}
		return objetos; 
		
	}
}
