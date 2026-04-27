package com.harry.paquetes.controladores;

import java.util.*;
//Controlador de los Usuarios
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.harry.paquetes.dtos.comentario.ComentarDTO;
import com.harry.paquetes.dtos.comentario.ComentarioMostDTO;

@RestController
@RequestMapping("/Comentarios")
public class ControladorComentarios {

	// Controlador para Mostrar los comentarios
	@GetMapping("/MostrarComentarios")
	public ResponseEntity<ArrayList<ComentarioMostDTO>> MostrarComentarios() {
		// Insertar servicio e implementacion
		return null;
	}

	// Controlador para Crear/Editar el Comentario
	@GetMapping("/Comentar")
	public ResponseEntity<ComentarDTO> Comentar(@RequestBody ComentarDTO comentar) {
		// Insertar servicio e implementacion
		return null;
	}

}