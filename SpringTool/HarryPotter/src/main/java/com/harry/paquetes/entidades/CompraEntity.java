package com.harry.paquetes.entidades;

import java.io.Serializable;

import jakarta.persistence.*;


@Entity
@Table(name = "COMPRA")
public class CompraEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_COMPRA")
	private int idcompra;

	@ManyToOne
    @JoinColumn(name = "ID_USUARIO")
    private UsuarioEntity usuario;

    @ManyToOne
    @JoinColumn(name = "ID_OBJETO")
    private ObjetoEntity objeto;

	public int getIdcompra() {
		return idcompra;
	}

	public void setIdcompra(int idcompra) {
		this.idcompra = idcompra;
	}

	public UsuarioEntity getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioEntity usuario) {
		this.usuario = usuario;
	}

	public ObjetoEntity getObjeto() {
		return objeto;
	}

	public void setObjeto(ObjetoEntity objeto) {
		this.objeto = objeto;
	}
}

