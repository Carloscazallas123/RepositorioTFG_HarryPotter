package com.harry.paquetes.dtos.objeto;
//Este Dto es para mostrar todos los objetos 
//Que ha comprado el usuario en su inventario
public class ObjetoInvDTO {
	
	private String nombre;
	private String descripcion;
	private int costo;
	private String personaje;
	
	
	public ObjetoInvDTO(int id, String nombre, String descripcion, int costo, String personaje) {
		
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.costo = costo;
		this.personaje = personaje;
	}

	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getDescripcion() {
		return descripcion;
	}


	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}


	public int getCosto() {
		return costo;
	}


	public void setCosto(int costo) {
		this.costo = costo;
	}


	public String getPersonaje() {
		return personaje;
	}


	public void setPersonaje(String personaje) {
		this.personaje = personaje;
	}
	
	
}
