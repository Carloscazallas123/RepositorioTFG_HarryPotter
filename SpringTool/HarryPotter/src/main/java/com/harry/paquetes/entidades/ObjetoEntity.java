package com.harry.paquetes.entidades;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.*;


@Entity
@Table(name = "OBJETO")
public class ObjetoEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_OBJETO")
	private int idobjeto;

	@Column(name = "NOMBRE")
	private String nombre;

	@Column(name = "DESCRIPCION")
	private String descripcion;
	
	@Column(name = "COSTE")
	private int costo;
	
	//Relacion 1:N Objeto <-> Personaje
	@ManyToOne
    @JoinColumn(name = "ID_PERSONAJE") 
    private PersonajeEntity personaje;

	//Relacion N:M Objeto <->Usuario
	@OneToMany(mappedBy = "objeto")
    private List<CompraEntity> compras;
	
	
	public List<CompraEntity> getCompras() {
		return compras;
	}

	public void setCompras(List<CompraEntity> compras) {
		this.compras = compras;
	}

	public int getIdobjeto() {
		return idobjeto;
	}

	public void setIdobjeto(int idobjeto) {
		this.idobjeto = idobjeto;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public int getCosto() {
		return costo;
	}

	public void setCosto(int costo) {
		this.costo = costo;
	}

	public PersonajeEntity getPersonaje() {
		return personaje;
	}

	public void setPersonaje(PersonajeEntity personaje) {
		this.personaje = personaje;
	}

	
	
}