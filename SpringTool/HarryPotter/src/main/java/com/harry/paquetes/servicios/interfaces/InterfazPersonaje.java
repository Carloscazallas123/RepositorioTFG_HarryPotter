package com.harry.paquetes.servicios.interfaces;

import com.harry.paquetes.dtos.personajes.PersonajeMostDTO;
import com.harry.paquetes.dtos.personajes.PersonajeVistDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import java.util.*;

public interface InterfazPersonaje {

	//Metodo para mostar los personajes desbloqueados por el usuario
	List<PersonajeMostDTO>mostrarbesbloqueados(UsuarioFullDTO usuario);
	
	//Metodo para mostrar el personaje seleccionado
	PersonajeVistDTO mostrarpersonaje(int id);
}
