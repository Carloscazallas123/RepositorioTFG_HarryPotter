package com.harry.paquetes.controladores;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
//Controlador de los Usuarios
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.harry.paquetes.dtos.objeto.ObjetoInvDTO;
import com.harry.paquetes.dtos.objeto.ObjetoTiendDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import com.harry.paquetes.servicios.interfaces.InterfazObjeto;

@RestController
@RequestMapping("/Objetos")
public class ControladorObjetos {
	
	@Autowired
	InterfazObjeto interfazObjetos;

	// Controlador para Mostrar los Objetos de la Tienda
	@GetMapping("/Tienda")
	public ResponseEntity<List<ObjetoTiendDTO>> Mostrartienda() {
		List<ObjetoTiendDTO>listatienda=interfazObjetos.mostrartienda();
		return ResponseEntity.ok(listatienda);
	}

	// Controlador para Mostar los Objetos en el Inventario
	@PostMapping("/Inventario")
	public ResponseEntity<List<ObjetoInvDTO>> Mostrarinventario(@RequestBody List<Integer> lista) {
		List<ObjetoInvDTO>listainventario=interfazObjetos.mostrarinventario(lista);
		return ResponseEntity.ok(listainventario);
	}

	// Controlador para Comprar el Objeto
	@PostMapping("/Comprar/{id}")
	public ResponseEntity<UsuarioFullDTO> Comprarobjeto(@RequestBody UsuarioFullDTO usuario, @PathVariable int id) {
		usuario=interfazObjetos.comprarobjeto(usuario, id);
		return ResponseEntity.ok(usuario);
	}

}
