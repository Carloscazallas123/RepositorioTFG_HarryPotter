package com.harry.paquetes.controladores;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
//Controlador de los Personajes
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.harry.paquetes.dtos.personajes.PersonajeMostDTO;
import com.harry.paquetes.dtos.personajes.PersonajeVistDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import com.harry.paquetes.servicios.interfaces.InterfazPersonaje;

@RestController
@RequestMapping("/Personajes")
public class ControladorPersonajes {

	@Autowired
	InterfazPersonaje interfazpersonaje;
	
	// Controlador para Mostrar los Personajes que tiene el usuario desbloqueados
	@PostMapping("/ListaPersonajes")
	public ResponseEntity<List<PersonajeMostDTO>> MostrarDesbloqueados(@RequestBody List<Integer>listapersonajesids) {
		List<PersonajeMostDTO>listapersonajes=interfazpersonaje.mostrarbesbloqueados(listapersonajesids);
		return ResponseEntity.ok(listapersonajes);
	}

	// Controlador para Mostrar el Personaje Seleccionado
	@PostMapping("/MostarPersonaje")
	public ResponseEntity<PersonajeVistDTO> MostrarPersonaje(@PathVariable int id) {
		PersonajeVistDTO personajevista=interfazpersonaje.mostrarpersonaje(id);
		return ResponseEntity.ok(personajevista);
	}

}
