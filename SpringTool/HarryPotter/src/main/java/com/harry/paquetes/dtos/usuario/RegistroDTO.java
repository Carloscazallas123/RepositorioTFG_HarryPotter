package com.harry.paquetes.dtos.usuario;
//Este DTO sirve para el formulario de Registro
public class RegistroDTO {

	private String nombre;
	private String email;
	private String contraseña;
	private String repcontraseña;
	
	
	public RegistroDTO(String nombre, String email, String contraseña, String repcontraseña) {
		this.nombre = nombre;
		this.email = email;
		this.contraseña = contraseña;
		this.repcontraseña = repcontraseña;
	}
	
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContraseña() {
		return contraseña;
	}
	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}
	public String getRepcontraseña() {
		return repcontraseña;
	}
	public void setRepcontraseña(String repcontraseña) {
		this.repcontraseña = repcontraseña;
	}
	
	
}
