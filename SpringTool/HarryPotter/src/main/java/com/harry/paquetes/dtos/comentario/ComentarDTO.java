package com.harry.paquetes.dtos.comentario;
// Este DTO sirve para crear el comentario
import java.sql.Date;

public class ComentarDTO {

	private String Descripcion;
	private int valor;
	private Date fecha;
	
	public ComentarDTO(String descripcion, int valor, Date fecha) {

		Descripcion = descripcion;
		this.valor = valor;
		this.fecha = fecha;
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
	
	
}
