package com.harry.paquetes.dtos.comentario;
// Este DTO sirve para mostrar el comentario
// en la pagina web 
import java.sql.Date;

public class ComentarioMostDTO {

	private String Descripcion;
	private int valor;
	private Date fecha;
	private String usuario;
	
	public ComentarioMostDTO(String descripcion, int valor, Date fecha, String usuario) {
	
		Descripcion = descripcion;
		this.valor = valor;
		this.fecha = fecha;
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

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	
	
}
