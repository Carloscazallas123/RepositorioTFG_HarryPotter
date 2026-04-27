package com.harry.paquetes.controladores;
import java.util.*;
//Controlador de los Personajes
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.harry.paquetes.dtos.personajes.PersonajeMostDTO;
import com.harry.paquetes.dtos.personajes.PersonajeVistDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;

@RestController
@RequestMapping("/Personajes")
public class ControladorPersonajes {

	//Controlador para Mostrar los Personajes que tiene el usuario desbloqueados
	@GetMapping("/Registro")
	public ResponseEntity<ArrayList<PersonajeMostDTO>> MostrarDesbloqueados(@RequestBody UsuarioFullDTO usuario) {
		// Insertar servicio e implementacion
		return null;
	}

	//Controlador para Mostrar el Personaje Seleccionado
	@GetMapping("/Sesion")
	public ResponseEntity<PersonajeVistDTO> MostrarPersonaje(@PathVariable int id) {
		// Insertar servicio e implementacion
		return null;
	}
	
}
