package com.harry.paquetes.dtos.comentario;
//Este DTO sirve para recopilar todo el 
//comentario
import java.sql.Date;

public class ComentarioFullDTO {

	private int id;
	private String descripcion;
	private int valor;
	private Date fecha;
	private String usuario;
	
	public ComentarioFullDTO(int id, String descripcion, int valor, Date fecha, String usuario) {
		this.id = id;
		this.descripcion = descripcion;
		this.valor = valor;
		this.fecha = fecha;
		this.usuario = usuario;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
