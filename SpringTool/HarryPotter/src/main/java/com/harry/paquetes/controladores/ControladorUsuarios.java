package com.harry.paquetes.controladores;

import org.springframework.beans.factory.annotation.Autowired;
//Controlador de los Usuarios
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.harry.paquetes.dtos.usuario.RegistroDTO;
import com.harry.paquetes.dtos.usuario.SesionDTO;
import com.harry.paquetes.dtos.usuario.UsuarioCasasDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import com.harry.paquetes.dtos.usuario.UsuarioPuntosDTO;
import com.harry.paquetes.servicios.interfaces.InterfazUsuario;

@RestController
@RequestMapping("/Usuarios")
public class ControladorUsuarios {

	@Autowired
	InterfazUsuario interfazusuario;
	// Controlador para Registrar el Usuario
	@PostMapping("/Registro")
	public ResponseEntity<UsuarioFullDTO> registrarusuario(@RequestBody RegistroDTO registro) {
		UsuarioFullDTO usuario=interfazusuario.registrarusuario(registro);
		return ResponseEntity.ok(usuario);
	}

	// Controlador para Iniciar Sesion el Usuario
	@PostMapping("/Sesion")
	public ResponseEntity<UsuarioFullDTO> iniciarsesion(@RequestBody SesionDTO sesion) {
		UsuarioFullDTO usuario= interfazusuario.iniciarsesionusuario(sesion);
		return ResponseEntity.ok(usuario);
	}
	
	// Controlador para Actualizarpuntos
	@PostMapping("/Puntaje")
	public ResponseEntity<UsuarioFullDTO> ActualizarPuntos(@RequestBody UsuarioPuntosDTO usuario) {
		System.out.println(usuario.getPuntos() + usuario.getUsuario().getNombre());
	UsuarioFullDTO usuarioactualizado=interfazusuario.actualizarpuntos(usuario);
	return ResponseEntity.ok(usuarioactualizado);
		}
	
	// Controlador para Actualizar la casa
	@PostMapping("/Casa")
		public ResponseEntity<UsuarioFullDTO> ActualizarCasa(@RequestBody UsuarioCasasDTO usuario) {
			System.out.println(usuario.getCasa() + " "+ usuario.getUsuario().getNombre());
		UsuarioFullDTO usuarioactualizado=interfazusuario.actualizarcasa(usuario);
		return ResponseEntity.ok(usuarioactualizado);
			}
}
