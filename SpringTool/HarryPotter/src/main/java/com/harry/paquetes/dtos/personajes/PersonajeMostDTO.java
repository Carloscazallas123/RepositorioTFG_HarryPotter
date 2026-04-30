package com.harry.paquetes.dtos.personajes;
//Este DTO sirve para mostrar el personaje
//en el apartado de personajes
public class PersonajeMostDTO {

	private String nombre;
	private String casa;
	
	public PersonajeMostDTO(String nombre, String casa) {
		this.nombre = nombre;
		this.casa = casa;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCasa() {
		return casa;
	}

	public void setCasa(String casa) {
		this.casa = casa;
	}
	
	
}
