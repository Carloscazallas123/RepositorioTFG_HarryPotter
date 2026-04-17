package com.harry.paquetes.entidades;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.*;


@Entity
@Table(name = "USUARIO")
public class UsuarioEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_USUARIO")
	private int idusuario;

	@Column(name = "NOMBRE")
	private String nombre;

	@Column(name = "CORREO")
	private String correo;
	
	@Column(name = "CONTRASEÑA")
	private String contra;
	
	@Column(name = "CASA")
	private String casa;
	
	@Column(name = "PUNTOS")
	private int puntos;
	
	//Relacion N:M Objeto <->Usuario
	@OneToMany(mappedBy = "usuario")
    private List<CompraEntity> compras;

	public List<CompraEntity> getCompras() {
		return compras;
	}

	public void setCompras(List<CompraEntity> compras) {
		this.compras = compras;
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

	public String getContra() {
		return contra;
	}

	public void setContra(String contra) {
		this.contra = contra;
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

	

}
