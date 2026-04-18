package com.harry.paquetes.dtos.personajes;
//Este DTO servira ara la ventana de mostrar
//todo el personaje 
import java.util.*;

public class PersonajeVistDTO {

	
	private String nombre;
	private String Descripcion;
	private String casa;
	private List<String>objetos;
	
	public PersonajeVistDTO(String nombre, String descripcion, String casa, List<String> objetos) {
		
		this.nombre = nombre;
		Descripcion = descripcion;
		this.casa = casa;
		this.objetos = objetos;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return Descripcion;
	}
	public void setDescripcion(String descripcion) {
		Descripcion = descripcion;
	}
	public String getCasa() {
		return casa;
	}
	public void setCasa(String casa) {
		this.casa = casa;
	}
	public List<String> getObjetos() {
		return objetos;
	}
	public void setObjetos(List<String> objetos) {
		this.objetos = objetos;
	}
	
	
}
