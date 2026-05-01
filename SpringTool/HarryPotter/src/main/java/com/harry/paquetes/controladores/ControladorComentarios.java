package com.harry.paquetes.controladores;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
//Controlador de los Usuarios
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.harry.paquetes.dtos.comentario.ComentarDTO;
import com.harry.paquetes.dtos.comentario.ComentarioMostDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import com.harry.paquetes.servicios.interfaces.*;

@RestController
@RequestMapping("/Comentarios")
public class ControladorComentarios {

	@Autowired
	InterfazComentario interfazcomentario;

	// Controlador para Mostrar los comentarios
	@GetMapping("/MostrarComentarios")
	public ResponseEntity<List<ComentarioMostDTO>> MostrarComentarios() {
		List<ComentarioMostDTO> listacomentarios = interfazcomentario.mostrarcomentarios();
		return ResponseEntity.ok(listacomentarios);
	}

	// Controlador para Crear/Editar el Comentario
	@PostMapping("/Comentar")
	public ResponseEntity<ComentarDTO> Comentar(@RequestBody UsuarioFullDTO usuario) {
		ComentarDTO comentar = interfazcomentario.comentar(usuario);
		return ResponseEntity.ok(comentar);
	}

}