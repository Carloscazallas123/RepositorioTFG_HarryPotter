package com.harry.paquetes.entidades;

import java.io.Serializable;
import java.time.*;

import jakarta.persistence.*;


@Entity
@Table(name = "COMENTARIO")
public class ComentarioEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_COMENTARIO")
	private int id;

	@Column(name = "DESCRIPCION")
	private String descripcion;

	@Column(name="FECHA")
	private LocalDate Fecha;
	
	@Column(name = "VALORACION")
	private int valoracion;
	
	//Relacion 1:N Comentario <-> Usuario
	@OneToOne
    @JoinColumn(name = "ID_USUARIO", unique = true) 
    private UsuarioEntity usuario;

	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDate getFecha() {
		return Fecha;
	}

	public LocalDate setFecha(LocalDate fecha) {
		return Fecha = fecha;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public int getValoracion() {
		return valoracion;
	}

	public void setValoracion(int valoracion) {
		this.valoracion = valoracion;
	}

	public UsuarioEntity getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioEntity usuario) {
		this.usuario = usuario;
	}

	
}
