package com.harry.paquetes.dtos.usuario;
//Este DTO sirve para al momento de Iniciar Sesion
public class SesionDTO {

	private String nombre;
	private String contraseña;
	
	
	public SesionDTO(String nombre, String contraseña) {
		this.nombre = nombre;
		this.contraseña = contraseña;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getContraseña() {
		return contraseña;
	}


	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}
	
	
}
