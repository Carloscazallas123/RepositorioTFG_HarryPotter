package com.harry.paquetes.controladores;

//Controlador de los Usuarios
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.harry.paquetes.dtos.usuario.RegistroDTO;
import com.harry.paquetes.dtos.usuario.SesionDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;

@RestController
@RequestMapping("/Usuarios")
public class ControladorUsuarios {

	// Controlador para Registrar el Usuario
	@PostMapping("/Registro")
	public ResponseEntity<UsuarioFullDTO> registrarusuario(@RequestBody RegistroDTO registro) {
		// Insertar servicio e implementacion
		return null;
	}

	// Controlador para Iniciar Sesion el Usuario
	@GetMapping("/Sesion")
	public ResponseEntity<UsuarioFullDTO> iniciarsesion(@RequestBody SesionDTO sesion) {
		// Insertar servicio e implementacion
		return null;
	}
}
