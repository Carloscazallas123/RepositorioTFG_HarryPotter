package com.harry.paquetes.dtos.comentario;
// Este DTO sirve para mostrar el comentario
// en la pagina web 
import java.sql.Date;
import java.time.LocalDate;

public class ComentarioMostDTO {

	private String Descripcion;
	private int valor;
	private LocalDate fecha;
	private String usuario;
	
	public ComentarioMostDTO(String descripcion, int valor, LocalDate localDate, String usuario) {
	
		Descripcion = descripcion;
		this.valor = valor;
		this.fecha = localDate;
		this.usuario = usuario;
	}

	public String getDescripcion() {
		return Descripcion;
	}

	public void setDescripcion(String descripcion) {
		Descripcion = descripcion;
	}

	public int getValor() {
		return valor;
	}

	public void setValor(int valor) {
		this.valor = valor;
	}

	public LocalDate getFecha() {
		return fecha;
	}

	public void setFecha(LocalDate fecha) {
		this.fecha = fecha;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	
	
}
