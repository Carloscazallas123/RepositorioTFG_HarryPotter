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
	private List<Integer>inventario;
	
	
	public UsuarioFullDTO(int idusuario, String nombre, String correo, String casa, int puntos,
			List<Integer> inventario) {
		this.idusuario = idusuario;
		this.nombre = nombre;
		this.correo = correo;
		this.casa = casa;
		this.puntos = puntos;
		this.inventario = inventario;
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


	public List<Integer> getInventario() {
		return inventario;
	}


	public void setInventario(List<Integer> inventario) {
		this.inventario = inventario;
	}
	
	
}
