package com.harry.paquetes.servicios.interfaces;

import com.harry.paquetes.dtos.usuario.RegistroDTO;
import com.harry.paquetes.dtos.usuario.SesionDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;

//Interfaz para la implementacion de los Usuarios
public interface InterfazUsuario {

	//Metodo para registrar el usuario
	UsuarioFullDTO registrarusuario(RegistroDTO registro);
	
	//Metodo para iniciar sesion del usuario
	UsuarioFullDTO inicarsesionusuario(SesionDTO sesion);
}
