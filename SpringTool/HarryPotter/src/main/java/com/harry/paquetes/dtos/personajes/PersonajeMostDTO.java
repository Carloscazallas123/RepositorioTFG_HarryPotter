package com.harry.paquetes.dtos.personajes;
//Este DTO sirve para mostrar el personaje
//en el apartado de personajes
public class PersonajeMostDTO {
	private int id;
	private String nombre;
	private String casa;
	
	public PersonajeMostDTO(int id,String nombre, String casa) {
		this.id=id;
		this.nombre = nombre;
		this.casa = casa;
	}

	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
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
