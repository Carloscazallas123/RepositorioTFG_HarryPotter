package com.harry.paquetes.dtos.usuario;

public class UsuarioCasasDTO {

	private UsuarioFullDTO usuario;
	private String casa;

	public UsuarioCasasDTO(UsuarioFullDTO usuario, String casa) {
		super();
		this.usuario = usuario;
		this.casa = casa;
	}

	public UsuarioFullDTO getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioFullDTO usuario) {
		this.usuario = usuario;
	}

	public String getCasa() {
		return casa;
	}

	public void setCasa(String casa) {
		this.casa = casa;
	}

}
