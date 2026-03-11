package com.harry.paquetes.entidades;

import java.io.Serializable;
import java.sql.Date;

import jakarta.persistence.*;


@Entity
@Table(name = "COMENTARIO")
public class ComentarioEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_COMENTARIO")
	private int idobjeto;

	@Column(name = "DESCRIPCION")
	private String descripcion;

	@Column(name="FECHA")
	private Date fecha;
	
	@Column(name = "VALORACION")
	private int valoracion;
	
	//Relacion 1:1 Comentario <-> Usuario
	@OneToOne
    @JoinColumn(name = "ID_USUARIO", unique = true) 
    private UsuarioEntity usuario;

	public int getIdobjeto() {
		return idobjeto;
	}

	public void setIdobjeto(int idobjeto) {
		this.idobjeto = idobjeto;
	}

	public Date getfecha() {
		return fecha;
	}

	public void setfecha(Date fecha) {
		this.fecha = fecha;
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
