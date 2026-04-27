package com.harry.paquetes.controladores;

import java.util.*;
//Controlador de los Usuarios
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.harry.paquetes.dtos.objeto.ObjetoInvDTO;
import com.harry.paquetes.dtos.objeto.ObjetoTiendDTO;
import com.harry.paquetes.dtos.usuario.RegistroDTO;
import com.harry.paquetes.dtos.usuario.SesionDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;

@RestController
@RequestMapping("/Objetos")
public class ControladorObjetos {

	// Controlador para Mostrar los Objetos de la Tienda
	@PostMapping("/Registro")
	public ResponseEntity<ArrayList<ObjetoTiendDTO>> Mostrartienda(RegistroDTO registro) {
		// Insertar servicio e implementacion
		return null;
	}

	// Controlador para Mostar los Objetos en el Inventario
	@GetMapping("/Sesion")
	public ResponseEntity<ArrayList<ObjetoInvDTO>> Mostrarinventario(SesionDTO sesion) {
		// Insertar servicio e implementacion
		return null;
	}

	// Controlador para Comprar el Objeto
	@GetMapping("/Sesion")
	public ResponseEntity<UsuarioFullDTO> Comprarobjeto(UsuarioFullDTO usuario, @PathVariable int id) {
		// Insertar servicio e implementacion
		return null;
	}

}
