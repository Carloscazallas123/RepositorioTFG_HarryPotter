package com.harry.paquetes.dtos.usuario;

//Este DTO es al momento de que termine de Iniciar Sesion
//El controlador devolverá este DTO para guardarlo en el Token
import java.util.*;

public class UsuarioFullDTO {

	private int idusuario;
	private String nombre;
	private String correo;
	private String casa;
	private int puntos;
	private List<Integer> objetos;
	private List<Integer> personajes;

	public UsuarioFullDTO(int idusuario, String nombre, String correo, List<Integer> objetos,
			List<Integer> personajes) {
		this.idusuario = idusuario;
		this.nombre = nombre;
		this.correo = correo;
		this.casa = null;
		this.puntos = 0;
		this.objetos = objetos;
		this.personajes=personajes;
	}

	public int getIdusuario() {
		return idusuario;
	}

	public void setIdusuario(int idusuario) {
		this.idusuario = idusuario;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getCasa() {
		return casa;
	}

	public void setCasa(String casa) {
		this.casa = casa;
	}

	public int getPuntos() {
		return puntos;
	}

	public void setPuntos(int puntos) {
		this.puntos = puntos;
	}

	public List<Integer> getObjetos() {
		return objetos;
	}

	public void setObjetos(List<Integer> objetos) {
		this.objetos = objetos;
	}

	public List<Integer> getPersonajes() {
		return personajes;
	}

	public void setPersonajes(List<Integer> personajes) {
		this.personajes = personajes;
	}



}
