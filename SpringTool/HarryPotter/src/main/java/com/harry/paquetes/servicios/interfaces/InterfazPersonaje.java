package com.harry.paquetes.servicios.interfaces;

import com.harry.paquetes.dtos.personajes.PersonajeMostDTO;
import com.harry.paquetes.dtos.personajes.PersonajeVistDTO;
import java.util.*;

//Interfaz para la implementacion de los Personajes
public interface InterfazPersonaje {

	//Metodo para mostar los personajes desbloqueados por el usuario
	List<PersonajeMostDTO>mostrarbesbloqueados(List<Integer>listapersonajesids);
	
	//Metodo para mostrar el personaje seleccionado
	PersonajeVistDTO mostrarpersonaje(int id);
}
