package com.harry.paquetes.dtos.comentario;
// Este DTO sirve para crear el comentario
import java.time.*;

public class ComentarDTO {

	private String Descripcion;
	private int valor;
	private LocalDate fecha;
	private int id;
	
	public ComentarDTO(String descripcion, int valor, LocalDate fecha, int id) {

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


	public LocalDate getFecha() {
		return fecha;
	}


	public void setFecha(LocalDate fecha) {
		this.fecha = fecha;
	}

	
	
	
}
