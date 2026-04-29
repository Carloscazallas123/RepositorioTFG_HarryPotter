package com.harry.paquetes.servicios.implementaciones;

import java.util.List;

import com.harry.paquetes.dtos.personajes.PersonajeMostDTO;
import com.harry.paquetes.dtos.personajes.PersonajeVistDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import com.harry.paquetes.servicios.interfaces.InterfazPersonaje;

public class ImplementacionPersonajes implements InterfazPersonaje {

	@Override
	public List<PersonajeMostDTO> mostrarbesbloqueados(UsuarioFullDTO usuario) {
		
		return null;
	}

	@Override
	public PersonajeVistDTO mostrarpersonaje(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
