package com.harry.paquetes.dtos.usuario;
//Este DTO sirve para al momento de Iniciar Sesion
public class SesionDTO {

	private String nombre;
	private String contrasena;
	
	
	public SesionDTO(String nombre, String contrasena) {
		this.nombre = nombre;
		this.contrasena = contrasena;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getContraseña() {
		return contrasena;
	}


	public void setContraseña(String contrasena) {
		this.contrasena = contrasena;
	}
	
	
}
