package com.harry.paquetes.servicios.interfaces;

import com.harry.paquetes.dtos.usuario.RegistroDTO;
import com.harry.paquetes.dtos.usuario.SesionDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import com.harry.paquetes.dtos.usuario.UsuarioPuntosDTO;

//Interfaz para la implementacion de los Usuarios
public interface InterfazUsuario {

	//Metodo para registrar el usuario
	UsuarioFullDTO registrarusuario(RegistroDTO registro);
	
	//Metodo para iniciar sesion del usuario
	UsuarioFullDTO iniciarsesionusuario(SesionDTO sesion);
	
	//Metodo para actualizar sus puntos
	UsuarioFullDTO actualizarpuntos(UsuarioPuntosDTO usuario);
	
	//Metodo para cambiar la casa
	//UsuarioFullDTO actualizarpuntos(UsuarioPuntosDTO usuario);
}
