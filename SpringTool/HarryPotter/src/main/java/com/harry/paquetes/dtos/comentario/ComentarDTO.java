package com.harry.paquetes.dtos.comentario;
// Este DTO sirve para crear el comentario
import java.sql.Date;

public class ComentarDTO {

	private String Descripcion;
	private int valor;
	private Date fecha;
	private int id;
	
	public ComentarDTO(String descripcion, int valor, Date fecha, int id) {

		Descripcion = descripcion;
		this.valor = valor;
		this.fecha = fecha;
		this.id = id;
	}
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
