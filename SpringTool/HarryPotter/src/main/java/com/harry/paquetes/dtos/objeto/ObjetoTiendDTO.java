package com.harry.paquetes.dtos.objeto;
//Este DTO sirve para mostrar los productos
//de la Tienda
public class ObjetoTiendDTO {

	
	private String nombre;
	private String descripcion;
	private int costo;
	
	
	public ObjetoTiendDTO(String nombre, String descripcion, int costo) {
		
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.costo = costo;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getDescripcio() {
		return descripcion;
	}


	public void setDescripcio(String descripcion) {
		this.descripcion = descripcion;
	}


	public int getCosto() {
		return costo;
	}


	public void setCosto(int costo) {
		this.costo = costo;
	}
	
	
	
}
