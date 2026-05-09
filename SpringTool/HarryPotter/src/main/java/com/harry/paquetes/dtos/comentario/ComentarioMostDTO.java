package com.harry.paquetes.dtos.comentario;
// Este DTO sirve para mostrar el comentario
// en la pagina web 
import java.time.LocalDate;

public class ComentarioMostDTO {

	private int idcomentario;
	private String descripcion;
	private int valor;
	private LocalDate fecha;
	private String usuario;
	
	public ComentarioMostDTO(int idcomentario,String descripcion, int valor, LocalDate localDate, String usuario) {
		this.idcomentario=idcomentario;
		this.descripcion = descripcion;
		this.valor = valor;
		this.fecha = localDate;
		this.usuario = usuario;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public int getValor() {
		return valor;
	}

	
	public int getIdcomentario() {
		return idcomentario;
	}

	public void setIdcomentario(int idcomentario) {
		this.idcomentario = idcomentario;
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
